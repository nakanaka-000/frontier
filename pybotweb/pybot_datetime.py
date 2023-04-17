from datetime import date, datetime

#今日の日付を返すコマンド
def today_command():
    today = date.today()
    response = '今日ノ日付ハ {} デス'.format(today)
    return response

#現在の日時を返すコマンド
def now_command():
    now = datetime.now()
    response = '現在日時ハ {} デス'.format(now)
    return response

#指定した日の曜日を返すコマンド
def weekday_command(command):
    data = command.split()
    try:
        year = int(data[1])
        month = int(data[2])
        day = int(data[3])
        one_day = date(year, month, day)
        
        weekday_str  = '月火水木金土日'
        weekday = weekday_str[one_day.weekday()]
        response = '{} ハ {} 曜日デス'.format(one_day, weekday)
    except IndexError:
        response = '3ツノ値(生年月日)ヲ指定シテクダサイ'
    except ValueError:
        response = '正シイ日付ヲ指定シテクダサイ'
    return response