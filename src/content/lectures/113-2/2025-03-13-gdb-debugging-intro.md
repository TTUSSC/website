---
date: '2025-03-13'
name: 'SIGSEGV時在做什麼？有沒有GDB？可以來除錯嗎？'
slug: 'gdb-debugging-intro'
difficulty: 3
lecturer: 'Yuto'
location: 'A3-200'
tags: ['除錯', 'GDB']
type: '主線'
timeline:
  [
    { 'time': '17:30~18:00', 'event': '場地佈置、進場' },
    { 'time': '18:00~19:30', 'event': 'GDB使用教學' },
    { 'time': '19:30~19:50', 'event': '實作練習' },
    { 'time': '19:50~20:00', 'event': '填寫問卷、收拾場地' },
  ]
slido: 'https://app.sli.do/event/2yR677sxAfZJW7m6dTotYa'
cowrite: 'https://hackmd.io/@ttussc/HkdHqBhF1e'
kktix: 'https://ttussc.kktix.cc/events/gdb'
---

在程式開發的學習過程中，Debug(除錯)往往是最耗時且令人沮喪的環節。傳統教學較注重語法和解題，容易忽略除錯技巧的培養。當程式發生錯誤，例如出現`SIGSEGV`(Segmentation Fault)時，新手往往難以找到問題根源，只能靠運氣或土法煉鋼的方式除錯。
GDB (GNU Debugger) 是一款歷史悠久且功能強大的除錯工具，廣泛應用於軟體開發、系統分析、資訊安全等領域。透過 GDB，開發者可以逐步追蹤程式碼的執行流程、檢視變數內容、分析記憶體狀態，從而快速定位並解決問題。
本次社課希望引導社員及對程式開發有興趣的同學，認識 GDB 這個強大的工具，擺脫以往 printf 大法低效率的除錯方式，學會利用更有效率的工具來解決問題，提升程式開發能力。
