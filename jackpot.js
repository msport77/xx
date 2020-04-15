	
	$(document).ready(function () {
				var delay = 10000000;
				var jackpot = 0;
				pull_jackpot();
				var timer;
				function pull_jackpot() {
					var nominal = 735228922;
					if (jackpot == 0) jackpot = parseInt(nominal - 100000);
					var amount = 100000 / delay * 1;
					timer = setInterval(function () { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
				}

				function set_jackpot(jackpot, nominal, amount) {
					var jackpot = jackpot + amount;
					if (jackpot >= nominal) {
						clearInterval(timer);
						pull_jackpot();
					} else {
						var result = addCommas(parseInt(jackpot));
						$('#domino').html(result);
					}
					return jackpot;
				}
				function addCommas(nStr) {
					nStr += '';
					x = nStr.split('.');
					x1 = x[0];
					x2 = x.length > 1 ? '.' + x[1] : '';
					var rgx = /(\d+)(\d{3})/;
					while (rgx.test(x1)) {
						x1 = x1.replace(rgx, '$1' + ',' + '$2');
					}
					return x1 + x2;
				}
			})
			
        $(document).ready(function () {
            var delay = 3000000;
            var jackpot = 0;
            pull_jackpot();
            var timer;
            function pull_jackpot() {
                var nominal = 928420899;
                if (jackpot == 0) jackpot = parseInt(nominal - 100000);
                var amount = 100000 / delay * 1;
                timer = setInterval(function () { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
            }

            function set_jackpot(jackpot, nominal, amount) {
                var jackpot = jackpot + amount;
                if (jackpot >= nominal) {
                    clearInterval(timer);
                    pull_jackpot();
                } else {
                    var result = addCommas(parseInt(jackpot));
                    $('#poker').html(result);
                }
                return jackpot;
            }
            function addCommas(nStr) {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }
        })
		
		
        $(document).ready(function () {
            var delay = 500000;
            var jackpot = 0;
            pull_jackpot();
            var timer;
            function pull_jackpot() {
                var nominal = 2208752899;
                if (jackpot == 0) jackpot = parseInt(nominal - 100000);
                var amount = 100000 / delay * 1;
                timer = setInterval(function () { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
            }

            function set_jackpot(jackpot, nominal, amount) {
                var jackpot = jackpot + amount;
                if (jackpot >= nominal) {
                    clearInterval(timer);
                    pull_jackpot();
                } else {
                    var result = addCommas(parseInt(jackpot));
                    $('#progressive_jackpot').html(result);
                }
                return jackpot;
            }
            function addCommas(nStr) {
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }
        })
	// $('#sectionTogel').hover(function(){
	// 	$('#sectionTogel').stop().animate({"right":"0px"}, "slow");
	// 	},function(){
	// 	$('#sectionTogel').stop().animate({"right":"-173px"}, "slow");
	// });
	