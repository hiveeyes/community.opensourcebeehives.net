window.PreloadStore={data:{},store:function(t,e){this.data[t]=e},getAndRemove:function(t,e){if(this.data[t]){var n=Em.RSVP.resolve(this.data[t]);return delete this.data[t],n}return e?Em.Deferred.promise(function(t){var n=e();n.then?n.then(function(e){return t.resolve(e)},function(e){return t.reject(e)}):t.resolve(n)}):Em.RSVP.resolve(null)},get:function(t){return this.data[t]},remove:function(t){this.data[t]&&delete this.data[t]},reset:function(){this.data={}}};