<?php
sleep(2);
header('Content-Type: application/json');
echo "
[
  { recid: 1, fname: 'John', lname: 'doe', email: 'vitali@gmail.com', sdate: '1/3/2012' },
  { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '2/4/2012' },
  { recid: 3, fname: 'Jin', lname: 'Franson', email: '--', sdate: '4/23/2012' },
  { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '5/3/2012' },
  { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
  { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'vitali@gmail.com', sdate: '2/5/2012' },
]
";
exit;
