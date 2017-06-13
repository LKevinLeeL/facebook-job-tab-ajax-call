$.ajax({
    url: "https://api.jibe.com/v1/jobs/find?limit=50",
    // url: "https://api.jibe.com/v1/jobs",
    headers: {
      "app_id": "7077e7b9",
      "app_key": "eaton",
      "Accept-Language": "en-us",
      "Accept": "application/json; charset=UTF-8",
    },
    dataType: "json",
    method: "GET",
    // data: {limit: numb_jobs },
    success: function(data) {
      console.log('all', data);
      // console.log('firstTitle',data.jobs[0].city);
      // console.log(JSON.stringify(data));

      for( i in data.jobs_by_language["en-us"]){
			     $('#container').append('<div class="job-container"><div class="job-info"><p class="title"><a href="https://eaton.jibeapply.com/jobs/'+ data.jobs_by_language["en-us"][i].slug +'" target="_blank">'+ data.jobs_by_language["en-us"][i].title +'</a></p><p class="location">'+ data.jobs_by_language["en-us"][i].city +', '+ data.jobs_by_language["en-us"][i].state +', '+ data.jobs_by_language["en-us"][i].country +'</p></div><a class="applybtn" href="https://eaton.jibeapply.com/jobs/'+ data.jobs_by_language["en-us"][i].slug +'" target="_blank">Apply</a></div>');
		  }
    },
    error: function(data){
		console.log('error',data);
	}
});
