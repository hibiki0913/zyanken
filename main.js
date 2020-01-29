function myhands(num) {

    var rand = Math.floor(Math.random() * 3); //乱数を発生
    var win_count = document.getElementById("win_count").value;
    win_count = Number(win_count);
    
    console.log(win_count);

    //結果 (win,lose,draw)
    var result = "draw!もう一回！";

    if (num === 0) {
        if (rand === 1) {
            result = "win!おめでとうございます！"
        } else if (rand === 2) {
            result = "lose...残念です"
        }
    } else if (num === 1) {
        if (rand === 0) {
            result = "lose...残念です"
        } else if (rand === 2) {
            result = "win!おめでとうございます！"
        }
    } else if (num === 2) {
        if (rand === 0) {
            result = "win!おめでとうございます！"
        } else if (rand === 1) {
            result = "lose...残念です"
        }
    }

    if(result == "win!おめでとうございます！"){
        win_count++;
    }else{
        win_count = 0;
    }
    document.getElementById("win_count").value = win_count;

    var element = document.getElementById("target");
    var elements = element.hoge;
    elements[rand].checked = true;
    document.getElementById('result').style.display = 'inline';

    if (result == "draw!もう一回！") {
        if (num == 0) {
            document.getElementById('radio_0').style.display = 'inline';
            document.getElementById('radio_1').style.display = 'none';
            document.getElementById('radio_2').style.display = 'none';
        } else if (num == 1) {
            document.getElementById('radio_0').style.display = 'none';
            document.getElementById('radio_1').style.display = 'inline';
            document.getElementById('radio_2').style.display = 'none';
        } else if (num == 2) {
            document.getElementById('radio_0').style.display = 'none';
            document.getElementById('radio_1').style.display = 'none';
            document.getElementById('radio_2').style.display = 'inline';
        }
    } else {
        if (num == 0) {
            if (rand == 1) {
                document.getElementById('radio_0').style.display = 'none';
                document.getElementById('radio_1').style.display = 'inline';
                document.getElementById('radio_2').style.display = 'none';
            } else {
                document.getElementById('radio_0').style.display = 'none';
                document.getElementById('radio_1').style.display = 'none';
                document.getElementById('radio_2').style.display = 'inline';
            }
        } else if (num == 1) {
            if (rand == 0) {
                document.getElementById('radio_0').style.display = "inline";
                document.getElementById('radio_1').style.display = 'none';
                document.getElementById('radio_2').style.display = 'none';
            } else {
                document.getElementById('radio_0').style.display = "none";
                document.getElementById('radio_1').style.display = 'none';
                document.getElementById('radio_2').style.display = "inline";
            }
        } else if (num == 2) {
            if (rand == 0) {
                document.getElementById('radio_0').style.display = 'inline';
                document.getElementById('radio_1').style.display = 'none';
                document.getElementById('radio_2').style.display = 'none';
            } else {
                document.getElementById('radio_0').style.display = "none";
                document.getElementById('radio_1').style.display = 'inline';
                document.getElementById('radio_2').style.display = 'none';
            }
        }
    }

    alert(result);
}