param(
    $token="REPLACEME"
)
curl.exe -v --trace - "http://localhost:8055/schema/diff?access_token=$token&force=true" -H "Content-Type: application/json" -d "@./directus/seed.json"