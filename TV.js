var body = $response.body;
let obj = JSON.parse(body);
obj.["pro_plan"] = pro_premium_trial;
obj.["is_authenticated"] = true;
body = JSON.stringify(obj);
$done({body});
