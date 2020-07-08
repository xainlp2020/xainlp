from scholarly import scholarly
import json
import time
import numpy as np

with open('xaipapers.json') as f:
    xai_papers = json.load(f)

for taxon in xai_papers:
    for paper in xai_papers[taxon]:
        print(paper['title'])
        wait = np.random.randint(20,60)
        print('waiting for {}'.format(wait))
        time.sleep(wait)
        search_query = scholarly.search_pubs(paper['title'])
        pub = next(search_query)
        print([citation.bib['title'] for citation in pub.citedby()])
        break