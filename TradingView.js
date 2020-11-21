let obj = JSON.parse($response.body);
obj.pro_plan = "pro_premium_trial";
obj.is_authenticated = true;
$done({body: JSON.stringify(obj)});
