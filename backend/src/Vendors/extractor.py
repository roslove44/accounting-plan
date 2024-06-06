from bs4 import BeautifulSoup
import re
import json

with open('account.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')
table_rows = soup.find_all('tr')


def cleaned_text(text):
    return re.sub(r'\s+', ' ', text).strip()


def get_account_info(table_row):
    account_info = table_row.find_all('td')
    return ([cleaned_text(account_info[0].get_text()), cleaned_text(account_info[1].get_text())])


def get_all_accounts(accounts_soup):
    accounts = []
    for account in table_rows:
        accounts.append(get_account_info(account))
    return accounts


accounts = get_all_accounts(table_rows)
json_data = {'data': accounts}
filename = 'data.json'
with open(filename, 'w', encoding='utf-8') as file:
    json.dump(json_data, file, ensure_ascii=False, indent=4)
