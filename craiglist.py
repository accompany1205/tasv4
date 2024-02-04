import requests

# Your RSS content
rss_content = '''
    <?xml version="1.0" encoding="utf-8"?>
    <rdf:RDF xmlns="http://purl.org/rss/1.0/"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:cl="http://www.craigslist.org/about/cl-bulk-ns/1.0">
    <channel>
        <items>
        <rdf:li rdf:resource="NYCApartmentSample1"/>
        <rdf:li rdf:resource="NYCApartmentSample2"/>
        </items>
        <cl:auth username="yourEmail@example.com" password="yourPassword" accountID="12345"/>
    </channel>

    <item rdf:about="NYCApartmentSample1">
        <cl:category>apa</cl:category>
        <cl:area>nyc</cl:area>
        <cl:subarea>mnh</cl:subarea>
        <cl:neighborhood>Upper East Side</cl:neighborhood>
        <cl:housingInfo price="3000" bedrooms="2" sqft="800"/>
        <title>Charming 2BR in Upper East Side</title>
        <description><![CDATA[Beautiful 2 bedroom apartment...]]></description>
    </item>

    <item rdf:about="NYCApartmentSample2">
        <cl:category>apa</cl:category>
        <cl:area>nyc</cl:area>
        <cl:subarea>brk</cl:subarea>
        <cl:neighborhood>Brooklyn Heights</cl:neighborhood>
        <cl:housingInfo price="2800" bedrooms="2" sqft="750"/>
        <title>Spacious 2BR in Brooklyn Heights</title>
        <description><![CDATA[Spacious and sunny 2BR apartment...]]></description>
    </item>
    </rdf:RDF>
'''

# Craigslist bulk post URL for validation
url = 'https://post.craigslist.org/bulk-rss/validate'

# Headers
headers = {
    'Content-Type': 'text/xml; charset=utf-8'
}

# Send the POST request
response = requests.post(url, data=rss_content.encode('utf-8'), headers=headers)

# Check the response
if response.status_code == 200:
    print("Submission successful.")
    print(response.text)  # The returned RSS document detailing validation results
else:
    print(f"Submission failed with status code: {response.status_code}")
    print(response.text)
