(function($)
{
	var cache = {};

	$.publish = function(topic, args)
	{
		$.each(cache[topic], function(){
			this.apply($, args || []);
		});
	};

	$.subscribe = function(topic, callback)
	{
		if(!cache[topic])
		{
			cache[topic] = [];
		}
		
		cache[topic].push(callback);
		return [topic, callback];
	};

	$.unsubscribe = function(handle)
	{
		var t = handle[0];
		cache[t] && $.each(cache[t], function(idx)
		{
			if(this == handle[1])
			{
				cache[t].splice(idx, 1);
			}
		});
	};

})(jQuery);