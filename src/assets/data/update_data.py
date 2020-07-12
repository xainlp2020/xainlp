import json
import time
import numpy as np
import warnings

# from scholarly import scholarly

import urllib
import requests
from bs4 import BeautifulSoup

import re

# with open('xaipapers.json') as f:
#     xai_papers = json.load(f)


## scholarly doesn't seem to work with a proxy/tor -- trying BeautifulSoup instead
# citation_url = {}
# for taxon in xai_papers:
#     for paper in xai_papers[taxon]:
#         title = paper['title']
#         citation_url[title] = {'id': paper['id']}
#         wait = np.random.randint(0,30)
#         print('waiting for {}'.format(wait))
#         time.sleep(wait)
#         query = scholarly.search_pubs(title)
#         query_result = next(query)
#         url = query_result['url_scholarbib']
#         citation_url[title]['citation_url'] = url

with open('xaipaperslinks.json') as f:
    xai_papers = json.load(f)

with open('xaipapers.json') as f:
     papers = json.load(f)

xai_titles_ids = {}
for taxon in papers:
    for paper in papers[taxon]:
        title = paper['title'].strip().strip('.').lower()
        xai_titles_ids[title] = paper['id']


USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0" # dummy
headers = {"user-agent" : USER_AGENT}

num_per_pg = 10 # max num of citations per page in Google Scholar
lb_t = 10
ub_t = 45

citation_net = {}
with open('citation_graph.json', 'w') as citation_net_file:
    citation_net_file.write("{graph:[\n")
    for paper in xai_papers['papers citation links']:
        cur_id = paper['id']
        cur_title = paper['title'].strip().strip('.').lower()
        cur_num_citations = int(paper["num_citations"])
        cur_urls = paper['citation_url']
        citation_net[cur_id] = []

        if cur_num_citations > num_per_pg:
            num_pages = int(cur_num_citations/num_per_pg) + 1
            num_pg_citations = num_per_pg
        else:
            num_pages = 1
            num_pg_citations = cur_num_citations
            

        for i in range(num_pages):
            if i > 0:
                cur_pg_id = i * num_per_pg
                URL = cur_urls[1]
                URL = URL.replace("start={}".format(num_per_pg), "start={}".format(cur_pg_id))
                print("cur paper id = {}, num_citations = {},  URL = {}".format(cur_id, cur_num_citations,URL))
                if (cur_num_citations - cur_pg_id) < num_per_pg:
                    num_pg_citations = cur_num_citations - cur_pg_id
                else:
                    num_pg_citations = num_per_pg 
            else: 
                URL = cur_urls[0]
                print("cur paper id = {}, num_citations = {},  URL = {}".format(cur_id, cur_num_citations,URL))
                 

            wait = np.random.randint(lb_t,ub_t)
            print('waiting for {}'.format(wait))
            time.sleep(wait)

            resp = requests.get(URL, headers=headers)
            if resp.status_code == 200:
                soup = BeautifulSoup(resp.content, "html.parser")

            # below may need to be updated if Google Scholar changes their html source strucutre
            citations = soup.find_all('h3', class_='gs_rt') 
            if len(citations) != num_pg_citations:
                message = "citations for paper 'id' {} is inconsistent, expected {}, got {}".format(cur_id, num_pg_citations, len(citations))
                warnings.warn(message)
                # warnings.showwarning(message, category=None, lineno=0, filename="citation_warning.log")

            if citations:
                for citation in citations:
                    citation_title = citation.text.lower()
                    if citation_title in xai_titles_ids:
                        citation_id = xai_titles_ids[citation_title]
                        citation_net[cur_id].append(citation_id)
            else:
                message = "0 citations for paper 'id' = {}".format(cur_id)
                warnings.warn(message)
                # warnings.showwarning(message, category=None, lineno=0 ,filename="citation_warning.log")

        citation_net_file.write("\t{node: %s,\n" % str(cur_id))
        citation_net_file.write("\tneighbors: %s\n\t},\n" % str(citation_net[cur_id]))



 # pattern = re.compile('.*?>(.*)</a></h3>.*')
    # for line in soup: 
    #     match = re.findall(pattern, str(line))
    #     print(match)
    #     if match:
    #         if match in title_dict:
    #             citation_net[paper['id']].append(title_dict[match])

    # break