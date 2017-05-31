$.ajax({
    url: "https://api.staging.jibe.com/v1/jobs",
    headers: {
      "app_id": "7077e7b9",
      "app_key": "eaton",
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
			     $('#container').append('<div class="job-container"><div class="job-info"><p class="title">'+ data.jobs[i].title +'</p><p class="location">'+ data.jobs[i].city +', '+ data.jobs[i].state +'</p></div><a href="https://eaton.staging.jibeapply.com/jobs/'+ data.jobs[i].slug +'" target="_blank">Apply</a></div>');
		  }
    },
    error: function(data){
		console.log('error',data);
	}
});
