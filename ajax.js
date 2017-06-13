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
      // console.log('all', data);

      var res = data.jobs_by_language["en-us"];
      // console.log('firstTitle',data.jobs[0].city);
      // console.log(JSON.stringify(data));
      console.log('all', res);

      var jobs = []

      // for (var job in res) {
      //   // console.log(res[job]);
      //   var city = res[job].city;
      //   var state = res[job].state;
      //   var country = res[job].country;
      //   var slug = res[job].slug;
      //   var title = res[job].title;
      //
      //   var jobObject = {
      //     slug: slug,
      //     title: title
      //   }
      //
      //   if (city) {
      //     jobObject.city = city;
      //   }
      //   if (state) {
      //     jobObject.state = state;
      //   }
      //   if (country) {
      //     jobObject.country = country;
      //   }
      //   // console.log('OBJECT', jobObject);
      //   jobs.push(jobObject)
      // }
      // console.log('testing',jobs);

      function getLocation (location) {
        if (location) {
          return location + ", "
        }
        else {
          return ""
        }
      }

      for( i in res){
			     $('#container').append('<div class="job-container"><div class="job-info"><p class="title"><a href="https://eaton.jibeapply.com/jobs/'+ res[i].slug +'" target="_blank">'+ res[i].title +'</a></p><p class="location">'+ getLocation(res[i].city) + getLocation(res[i].state) + res[i].country +'</p></div><a class="applybtn" href="https://eaton.jibeapply.com/jobs/'+ res[i].slug +'" target="_blank">Apply</a></div>');
		  }



    },
    error: function(data){
		console.log('error',data);
	}
});
