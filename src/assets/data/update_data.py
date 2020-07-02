from scholarly import scholarly
import json


with open('xaipapers.json') as f:
    xai_papers = json.load(f)

for taxon in xai_papers:
    for paper in xai_papers[taxon]:
        print(paper['title'])
        search_query = scholarly.search_pubs(paper['title'])
        print(next(search_query))
        break