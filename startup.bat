REM activate virtualenv by executing 'Scripts/activate'
.\Script\activate  REM for windows

REM install python modules
REM pip install -r requirements.txt
cd gitexplorer\frontend\
REM npm install   #install node dependencies

REM start node server
start cmd /C npm run start

REM start python server
start cmd /C ..\manage.py migrate
start cmd /C ..\manage.py runserver