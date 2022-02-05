
//instead of quotes
/*
1.리팩터링 정의
2.두 개의 모자
3.리팩터링하는 이유
4.언제 리팩터링해야 할까
5.리팩터링 시 고려할 문제
6.리팩터링, 아키택처, 애그니
7.리팩터링과 소프트웨어 개발 프로세스
8.리팩터링과 성능
*/

const quoteArr = [
    {quote : '리팩터링 정의',
     auth : 'Olivia'},
    {quote : '두 개의 모자',
     auth : 'Emma'},
    {quote : '리팩터링하는 이유',
     auth : 'Ava'},
    {quote : '언제 리팩터링해야 할까',
     auth : 'Sophia'},
    {quote : '리팩터링 시 고려할 문제',
     auth : 'Isabella'},
    {quote : '리팩터링, 아키택처, 애그니',
     auth : 'Charlotte'},
    {quote : '리팩터링과 소프트웨어 개발 프로세스',
     auth : 'Amelia'},
    {quote : '리팩터링과 성능',
     auth : 'Evelyn'},
    {quote : '자료구조',
    auth : '천인국'},
    {quote : '깊이 우선 탐색',
    auth : 'python으로 공부하기'},
]

const quote = document.querySelector("#quotes span:first-child");
const auth = document.querySelector("#quotes span:last-child");
const todayQuote = quoteArr[Math.floor(Math.random()*quoteArr.length)]

quote.innerText = todayQuote.quote;
auth.innerText = todayQuote.auth;
