### Import demo data to database

    mongoimport -d basicvod -c movies --type json --jsonArray --drop < demodata.json