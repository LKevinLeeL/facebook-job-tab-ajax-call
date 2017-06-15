$.ajax({
    url: "https://api.jibe.com/v1/jobs/find?limit=100",
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
      // console.log('all', data);

      var res = data.jobs_by_language["en-us"];
      // console.log('firstTitle',data.jobs[0].city);
      // console.log(JSON.stringify(data));
      console.log('all', res);

      var jobs = []

      function getLocation (location) {
        if (location) {
          return location + ", "
        }
        else {
          return ""
        }
      }

      for( i in res){
			     $('#container').append('<div class="job-container"><div class="job-info"><p class="title"><a href="https://eaton.jibeapply.com/jobs/'+ res[i].slug +'" target="_blank">'+ res[i].title +'</a></p><p class="location">'+ getLocation(res[i].city) + getLocation(res[i].state) + res[i].country +'</p></div><a class="applybtn" href="https://eaton.jibeapply.com/jobs/'+ res[i].slug +'" target="_blank">View Job Description</a></div>');
		  }

    },
    error: function(data){
		console.log('error',data);
	}
});
