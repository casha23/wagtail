// Generated by CoffeeScript 1.10.0
(function() {
  this.MiniCalendar = (function() {
    function MiniCalendar(calendarUrl, year1, month1) {
      this.calendarUrl = calendarUrl;
      this.year = year1;
      this.month = month1;
      return;
    }

    MiniCalendar.prototype.enable = function() {
      $(".joy-minical__prev").click((function(_this) {
        return function() {
          var minicalUrl;
          _this.month--;
          if (_this.month === 0) {
            _this.month = 12;
            _this.year--;
          }
          minicalUrl = _this.calendarUrl + "mini/" + _this.year + "/" + _this.month + "/";
          $.get(minicalUrl, _this._replace.bind(_this));
        };
      })(this));
      $(".joy-minical__next").click((function(_this) {
        return function() {
          var minicalUrl;
          _this.month++;
          if (_this.month === 13) {
            _this.month = 1;
            _this.year++;
          }
          minicalUrl = _this.calendarUrl + "mini/" + _this.year + "/" + _this.month + "/";
          $.get(minicalUrl, _this._replace.bind(_this));
        };
      })(this));
    };

    MiniCalendar.prototype._replace = function(data) {
      var month, tbody, year;
      data = $("<div>").append($.parseHTML($.trim(data)));
      month = $(".joy-minical__month-name");
      month.replaceWith(data.find(".joy-minical__month-name"));
      year = $(".joy-minical__year-number");
      year.replaceWith(data.find(".joy-minical__year-number"));
      tbody = $(".joy-minical__body");
      tbody.replaceWith(data.find(".joy-minical__body"));
    };

    return MiniCalendar;

  })();

}).call(this);