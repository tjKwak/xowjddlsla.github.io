window.onload = function() {
    console.log('hi')
    const html = document.querySelector('html');
        const headerSec = document.querySelector('header');
        const introSec = document.querySelector('.intro');
        const contSec = document.querySelector('.content');
        const byeSec = document.querySelector('.goodbye');

        var old = html.scrollTop;

        

        
        //새로고침시 맨 위로
        $(document).ready(function(){
            setTimeout(function(){
                $('html, body').scrollTop(0);
            }, 100);
        });

        //스크롤 애니메이션
        window.addEventListener('scroll', scrollWork);
        function scrollWork(e) {
            e.preventDefault();
            //콘트쪽으로 스크롤 내렸을때
            if (html.scrollTop > 80 && old < html.scrollTop && html.scrollTop < 500) {
                introSec.className = 'intro scrollTopDown';
                contSec.className = 'content scrollTopDown';
                byeSec.classList.remove('on');
                $('.clouds').addClass('moveOut');
            }
            //인트로쪽으로 스크롤 올렸을때
            else if (html.scrollTop < 80 && old > html.scrollTop) {
                introSec.className = 'intro scrollTopUp';
                contSec.className = 'content scrollTopUp';
                byeSec.classList.remove('on');
                $('.clouds').removeClass('moveOut');
            }

            //푸터쪽으로 스크롤 내렸을때
            else if (html.scrollTop + 950 > contSec.scrollHeight && old < html.scrollTop) {
                contSec.className = 'content scrollBottomDown';
                byeSec.classList.add('on');
                $('.clouds').removeClass('moveOut');
            }
            //콘트쪽으로 스크롤 올렸을때
            else if(html.scrollTop + 950 > contSec.scrollHeight && old > html.scrollTop) {
                contSec.className = 'content scrollBottomUp';
                byeSec.classList.remove('on');
                $('.clouds').addClass('moveOut');
            }
            old = html.scrollTop;
        }


        /////////////////////////////////
        //////////클릭, 스크롤 기능////////
        /////////////////////////////////


        //포트폴리오 - 선택한 메뉴에 on붙이는 기능
        var menuBtn = document.querySelector('.p_menu');
        var menuBox = document.querySelectorAll('.p_menu li')
        var listBox = document.querySelectorAll('.p_list ul');

        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('메뉴 눌렀다');
            console.log(e);
            for (let i = 0; i < menuBox.length; i++) {
                menuBox[i].classList.remove('on');
                listBox[i].classList.remove('on');
                menuBox[i].array = i;
            }
            var clicked = e.target.parentElement;
            clicked.classList.add('on');
            listBox[clicked.array].classList.add('on');
        })


        // //포트폴리오 - more 버튼
        // var moreBtns = document.querySelectorAll('.modal');
        // var moreCloseBtns = document.querySelectorAll('.more-close-btn');
        // var moreSecs = document.querySelectorAll('.page-more');

        // for (let i = 0; i < moreBtns.length; i++) {
        //     moreBtns[i].addEventListener('click', function(e) {
        //         e.preventDefault();
        //         moreSecs[i].classList.remove('hidden');
        //         headerSec.classList.add('hidden');
        //     })
        //     moreCloseBtns[i].addEventListener('click', function(e) {
        //         e.preventDefault();
        //         moreSecs[i].classList.add('hidden');
        //         headerSec.classList.remove('hidden');
        //     })
        // }


        //인트로 - 글자 써지는 효과
        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var liLength = $(".typing-txt>ul>li").length;
        var screen = document.querySelector('.phone-screen');
        var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); // 타이핑될 텍스트를 가져온다 
        typingTxt = typingTxt.split(""); // 한글자씩 자른다.   

        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            //var tyInt = setInterval(typing,100);
            var tyInt;
            clearInterval(tyInt);
            setTimeout(function() {
                //화면이 켜지기전까지 3.3초 쉬고 시작한다.
                tyInt = setInterval(typing, 80)
            }, 3300);
        }

        function typing() {
            $(".typing").removeClass('end');//커서를 감춘다

            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else { //한문장이끝나면
                //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
                if (liIndex >= liLength - 1) {
                    liIndex = 0;
                } else {
                    liIndex++;
                }
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                clearInterval(tyInt);
                $(".typing").addClass('end'); //문장이 끝나면 커서효과를 킨다

                //다음문장 타이핑전 2초 쉰다
                setTimeout(function() {
                    $(".typing").html('');
                    tyInt = setInterval(typing, 80);
                }, 2000);
            }
        }
 }