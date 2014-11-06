/*
Yahoo Finance stock historical data, prices and details retrieval function written in Javascript, jQuery and YQL
v2013-08-05
(c) 2013 by Fincluster ltd - http://fincluster.com <dev@fincluster.com>
*/
(function($) {
    function getStock(opts, type, complete) {
        var defs = {
            desc: false,
            baseURL: 'http://query.yahooapis.com/v1/public/yql?q=',
            query: {
                quotes: 'select * from yahoo.finance.quotes where symbol = "{stock}" | sort(field="{sortBy}", descending="{desc}")',
                historicaldata: 'select * from yahoo.finance.historicaldata where symbol = "{stock}" and startDate = "{startDate}" and endDate = "{endDate}"'
            },
            suffixURL: {
                quotes: '&env=store://datatables.org/alltableswithkeys&format=json&callback=?',
                historicaldata: '&env=store://datatables.org/alltableswithkeys&format=json&callback=?'
            }
        };
 
        opts = opts || {};
 
        if (!opts.stock) {
            complete('No stock defined');
            return;
        }
 
        var query = defs.query[type]
        .replace('{stock}', opts.stock)
        .replace('{sortBy}', defs.sortBy)
        .replace('{desc}', defs.desc)
        .replace('{startDate}', opts.startDate)
        .replace('{endDate}', opts.endDate)
 
        var url = defs.baseURL + query + (defs.suffixURL[type] || '');
        $.getJSON(url, function(data) {
            var err = null;
            if (!data || !data.query) {
                err = true;
            }
            complete(err, !err && data.query.results);    });
    }
    window.getStock = getStock;
})(jQuery);

//Usage Examples
// getStock({ stock: 'AAPL'}, 'quotes', function(err, data) {
//     console.log(data);
// });
 
// getStock({ stock: 'AAPL', startDate: '2013-01-01', endDate: '2013-01-05' }, 'historicaldata', function(err, data) {
//     console.log(data);
// });

//Retrieve multiple stocks (added by me)
//List of stocks
var stocklist = ['AAPL','GME','GOOG','MU','GM','GILD','AAL','FB','YHOO','JCP'];

for(cnt=0;cnt<stocklist.length;cnt++) {

getStock({ stock: stocklist[cnt]}, 'quotes', function(err, data) {
    //console.log(data);

//convert DividendShare and EarningsShare from string to number
var divshare = parseFloat(data.quote.DividendShare);
var earnshare = parseFloat(data.quote.EarningsShare);

var epsdiv = earnshare / divshare;

    if (divshare === 0) {
        epsdiv = 0;
    } else {
        epsdiv;
    };

    var tableRowString = "<tr>" +
                            "<td>" + data.quote.Name + "</td>" +
                            "<td>" + data.quote.symbol + "</td>" +
                            "<td>" + data.quote.AskRealtime + "</td>" +
                            "<td>" + data.quote.DividendYield + "</td>" +
                            "<td>" + data.quote.DividendShare + "</td>" +
                            "<td>" + data.quote.EarningsShare + "</td>" +
                            "<td>" + epsdiv + "</td>" +
                        "</tr>";
    $("#listbody").append(tableRowString);
});
}


//attempting DataTable
// getStock({ stock: 'AAPL'}, 'quotes', function(err, data) {
// $(document).ready(function() {
//     $("#listing").DataTable( {
//         data: data,
//         columns: [
//             {data: 'Name'}]
//        });

// });
// });



