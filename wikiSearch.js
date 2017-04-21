$(document).ready(function() {
            function strToLink(str) {
                return str.replace(/\s/g, "+")
            }

            function search() {
                return document.getElementById("search").submit();
            }
            var saddress = "https://en.wikipedia.com/api.php?action=query&format=json&list=search&srsearch="
            $('form-control').click(function() {
                console.log("search clicked")
                var str = document.getElementById("search").submit();
                str = strToLink(str);
                $.getJSON(saddress + str, function(data) {

                    }
                }

            });