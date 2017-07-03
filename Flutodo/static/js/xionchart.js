 $(function() {
                "use strict";
           //DONUT PushGCMCHART
                var donut = new Morris.Donut({
                    element: 'PushGCM-donut-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [
                        {label: "Provider 1", value: 12},
                        {label: "Provider 2", value: 30},
                        {label: "Provider 3", value: 20}
                    ],
                    hideHover: 'auto'
                });   
    //BAR PushGCM CHART
                var bargcm = new Morris.Bar({
                    element: 'PushGCM-bar-chart',
                    resize: true,
                    data: [0,0],
                    barColors: ['#00a65a', '#f56954'],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['Success', 'Failure'],
                    hideHover: 'auto'
                });
              
    //DONUT SubsGCM CHART
                var donut = new Morris.Donut({
                    element: 'SubsGCM-donut-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [
                       {label: "Provider 1", value: 52},
                        {label: "Provider 2", value: 40},
                        {label: "Provider 3", value: 70}
                    ],
                    hideHover: 'auto'
                });   
    //BAR SubsGCM CHART
            var bar = new Morris.Bar({
                    element: 'SubsGCM-bar-chart',
                    resize: true,
                    data: [
                        {y: 'Provider 1', a: 360},
                        {y: 'Provider 2', a: 275},
                        {y: 'Provider 3', a: 500}                      
                    ],
                    barColors: ['#00a65a'],
                    xkey: 'y',
                    ykeys: ['a'],
                    labels: ['Request'],
                    hideHover: 'auto'
                });    
                
             //DONUT DelGCM CHART
                var donut = new Morris.Donut({
                    element: 'UnSubsGCM-donut-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [
                        {label: "Provider 1", value: 22},
                        {label: "Provider 2", value: 70},
                        {label: "Provider 3", value: 50}
                    ],
                    hideHover: 'auto'
                }); 
                  
    //BAR DelGCM CHART
                var bar = new Morris.Bar({
                    element: 'UnSubsGCM-bar-chart',
                    resize: true,
                    data: [
                        {y: 'Provider 1', a: 360},
                        {y: 'Provider 2', a: 275},
                        {y: 'Provider 3', a: 500}                     
                    ],
                    barColors: ['#00a65a', '#f56954'],
                    xkey: 'y',
                    ykeys: ['a'],
                    labels: ['Request'],
                    hideHover: 'auto'
                });

 //DONUT DelGCM CHART
                var donut = new Morris.Donut({
                    element: 'UpSubsGCM-donut-chart',
                    resize: true,
                    colors: ["#3c8dbc", "#f56954", "#00a65a"],
                    data: [
                        {label: "Provider 1", value: 22},
                        {label: "Provider 2", value: 70},
                        {label: "Provider 3", value: 50}
                    ],
                    hideHover: 'auto'
                }); 
                  
    //BAR DelGCM CHART
                var bar = new Morris.Bar({
                    element: 'UpSubsGCM-bar-chart',
                    resize: true,
                    data: [
                        {y: 'Provider 1', a: 360},
                        {y: 'Provider 2', a: 275},
                        {y: 'Provider 3', a: 500}                     
                    ],
                    barColors: ['#00a65a', '#f56954'],
                    xkey: 'y',
                    ykeys: ['a'],
                    labels: ['Request'],
                    hideHover: 'auto'
                });



// Fire off an AJAX request to load the data
  function requestData(chart) {
  $.ajax({
      type: "GET",
      dataType: 'json',
      url: "http://127.0.0.1:3000/API/chart/PushGcmBarChart", // This is the URL to the API
      data: {} // Passing a parameter to the API to specify number of days
    })
    .done(function( data ) {
      // When the response to the AJAX request comes back render the chart with new data
      chart.setData(data);
      console.log(data);
    })
    .fail(function() {
      // If there is no communication between the server, show an error
      //alert( "error occured" );
    })
    
    }

requestData(bargcm);

});

       