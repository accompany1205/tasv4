param(
    $token="REPLACEME"
)
curl.exe -v http://localhost:8055/schema/snapshot?access_token=$token -o directus/seed.json