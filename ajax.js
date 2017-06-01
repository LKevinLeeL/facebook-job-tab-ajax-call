$.ajax({
    url: "https://api.jibe.com/v1/jobs",
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
			     $('#container').append('<div class="job-container"><div class="job-info"><p class="title"><a href="https://jobs.eaton.com/jobs/'+ data.jobs[i].slug +'" target="_blank">'+ data.jobs[i].title +'</a></p><p class="location">'+ data.jobs[i].city +', '+ data.jobs[i].state +', '+ data.jobs[i].country +'</p></div><a class="applybtn" href="https://eaton.staging.jibeapply.com/jobs/'+ data.jobs[i].slug +'" target="_blank">Apply</a></div>');
		  }
    },
    error: function(data){
		console.log('error',data);
	}
});
