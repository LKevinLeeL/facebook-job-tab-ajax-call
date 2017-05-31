$.ajax({
    url: "https://api.staging.jibe.com/v1/jobs",
    headers: {
      "app_id": "6ff28ef5",
      "app_key": "public-tyrell",
      "Accept-Language": "en-us",
      "Accept": "application/json; charset=UTF-8"
    },
    method: "GET",
    dataType: "json",
    // data: {},
    success: function(data) {
      console.log('all', data);
      console.log('firstTitle',data.jobs[0].city);
      // console.log(JSON.stringify(data));

      for( i in data.jobs){
			     $('#container').append('<div class="job-container"><div class="job-info"><p>'+ data.jobs[i].title +'</p><p>'+ data.jobs[i].city +', '+ data.jobs[i].state +'</p></div><a href="https://mortonfinancial.staging.jibeapply.com/jobs/'+ data.jobs[i].slug +'">Apply</a></div>');
		  }
    },
    error: function(data){
		console.log('error',data);
	}
});
