<?php
header('Content-Type: application/json');
$r[1] = mt_rand(1, 10)."1";
$r[2] = mt_rand(1, 10)."2";
$r[3] = mt_rand(1, 10)."3";
$r[4] = mt_rand(1, 10)."4";
$r[5] = mt_rand(1, 10)."5";
$r[6] = mt_rand(1, 10)."6";
echo "
[
  { recid: $r[1], fname: 'John', lname: 'doe', email: 'vitali@gmail.com', sdate: '1/3/2012' },
  { recid: $r[2], fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '2/4/2012' },
  { recid: $r[3], fname: 'Jin', lname: 'Franson', email: '--', sdate: '4/23/2012' },
  { recid: $r[4], fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '5/3/2012' },
  { recid: $r[5], fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
  { recid: $r[6], fname: 'Francis', lname: 'Gatos', email: 'vitali@gmail.com', sdate: '2/5/2012' },
]
";
exit;
