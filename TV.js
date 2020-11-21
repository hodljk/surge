body = $response.body.replace(/\"pro\_plan\"\:\s\"\"/, "\"isPremium\":true")
$done({body});
