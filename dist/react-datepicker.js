!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("react-onclickoutside"),
        require("moment"),
        require("react-popper")
      ))
    : "function" == typeof define && define.amd
      ? define(
          [
            "react",
            "prop-types",
            "classnames",
            "react-onclickoutside",
            "moment",
            "react-popper"
          ],
          t
        )
      : (e.DatePicker = t(
          e.React,
          e.PropTypes,
          e.classNames,
          e.onClickOutside,
          e.moment,
          e.ReactPopper
        ));
})(this, function(e, t, n, r, o, a) {
  "use strict";
  function s(e, t, n) {
    return e.set(t, n);
  }
  function i(e, t, n) {
    return e.add(t, n);
  }
  function p(e, t, n) {
    return e.subtract(t, n);
  }
  function c(e, t) {
    return e.get(t);
  }
  function l(e, t) {
    return e.startOf(t);
  }
  function u(e) {
    return o(e);
  }
  function d(e) {
    return null == e
      ? u()
      : (function(e) {
          return o()
            .utc()
            .utcOffset(e);
        })(e);
  }
  function h(e) {
    return e.clone();
  }
  function m(e) {
    return o.isMoment(e);
  }
  function f(e, t) {
    return e.format(t);
  }
  function D(e, t) {
    return e.set({ hour: t.hour, minute: t.minute, second: t.second }), e;
  }
  function y(e, t) {
    return s(e, "month", t);
  }
  function g(e, t) {
    return s(e, "year", t);
  }
  function b(e) {
    return c(e, "minute");
  }
  function w(e) {
    return c(e, "hour");
  }
  function v(e) {
    return c(e, "month");
  }
  function k(e) {
    return c(e, "year");
  }
  function C(e) {
    return c(e, "date");
  }
  function S(e) {
    return l(e, "week");
  }
  function _(e) {
    return l(e, "month");
  }
  function M(e, t) {
    return i(e, t, "minutes");
  }
  function N(e, t) {
    return i(e, t, "days");
  }
  function O(e, t) {
    return i(e, t, "weeks");
  }
  function T(e, t) {
    return i(e, t, "months");
  }
  function E(e, t) {
    return p(e, t, "months");
  }
  function x(e, t) {
    return e.isBefore(t);
  }
  function j(e, t) {
    return e.isAfter(t);
  }
  function Y(e, t) {
    return e && t ? e.isSame(t, "year") : !e && !t;
  }
  function R(e, t) {
    return e && t ? e.isSame(t, "month") : !e && !t;
  }
  function F(e, t) {
    return e && t ? e.isSame(t, "day") : !e && !t;
  }
  function W(e, t, n) {
    var r = t
        .clone()
        .startOf("day")
        .subtract(1, "seconds"),
      o = n
        .clone()
        .startOf("day")
        .add(1, "seconds");
    return e
      .clone()
      .startOf("day")
      .isBetween(r, o);
  }
  function I(e, t) {
    return e.clone().locale(t || o.locale());
  }
  function P(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = t.minDate,
      r = t.maxDate,
      o = t.excludeDates,
      a = t.includeDates,
      s = t.filterDate;
    return (
      (n && e.isBefore(n, "day")) ||
      (r && e.isAfter(r, "day")) ||
      (o &&
        o.some(function(t) {
          return F(e, t);
        })) ||
      (a &&
        !a.some(function(t) {
          return F(e, t);
        })) ||
      (s && !s(e.clone())) ||
      !1
    );
  }
  function q(e, t) {
    for (var n = t.length, r = 0; n > r; r++)
      if (
        t[r].get("hours") === e.get("hours") &&
        t[r].get("minutes") === e.get("minutes")
      )
        return !0;
    return !1;
  }
  function B(e, t) {
    var n = t.minTime,
      r = t.maxTime;
    if (!n || !r) throw Error("Both minTime and maxTime props required");
    var a = o()
        .hours(0)
        .minutes(0)
        .seconds(0),
      s = a
        .clone()
        .hours(e.get("hours"))
        .minutes(e.get("minutes")),
      i = a
        .clone()
        .hours(n.get("hours"))
        .minutes(n.get("minutes")),
      p = a
        .clone()
        .hours(r.get("hours"))
        .minutes(r.get("minutes"));
    return !(s.isSameOrAfter(i) && s.isSameOrBefore(p));
  }
  function V(e) {
    var t = e.minDate,
      n = e.includeDates;
    return n && t
      ? o.min(
          n.filter(function(e) {
            return t.isSameOrBefore(e, "day");
          })
        )
      : n ? o.min(n) : t;
  }
  function L(e) {
    var t = e.maxDate,
      n = e.includeDates;
    return n && t
      ? o.max(
          n.filter(function(e) {
            return t.isSameOrAfter(e, "day");
          })
        )
      : n ? o.max(n) : t;
  }
  function A() {
    for (
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "react-datepicker__day--highlighted",
        n = new Map(),
        r = 0,
        o = e.length;
      o > r;
      r++
    ) {
      var a = e[r];
      if (m(a)) {
        var s = a.format("MM.DD.YYYY"),
          i = n.get(s) || [];
        i.includes(t) || (i.push(t), n.set(s, i));
      } else if ("object" === (void 0 === a ? "undefined" : H(a))) {
        var p = Object.keys(a),
          c = p[0],
          l = a[p[0]];
        if ("string" == typeof c && l.constructor === Array)
          for (var u = 0, d = l.length; d > u; u++) {
            var h = l[u].format("MM.DD.YYYY"),
              f = n.get(h) || [];
            f.includes(c) || (f.push(c), n.set(h, f));
          }
      }
    }
    return n;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (t = t && t.hasOwnProperty("default") ? t.default : t),
    (n = n && n.hasOwnProperty("default") ? n.default : n),
    (r = r && r.hasOwnProperty("default") ? r.default : r),
    (o = o && o.hasOwnProperty("default") ? o.default : o);
  var H =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    K = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    z = (function() {
      function e(e, t) {
        for (var n = 0; t.length > n; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    U = function(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    },
    G = function(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    },
    J = (function(t) {
      function r(n) {
        K(this, r);
        var o = G(this, t.call(this, n));
        (o.renderOptions = function() {
          var t = o.props.year,
            n = o.state.yearsList.map(function(n) {
              return e.createElement(
                "div",
                {
                  className:
                    t === n
                      ? "react-datepicker__year-option --selected_year"
                      : "react-datepicker__year-option",
                  key: n,
                  ref: n,
                  onClick: o.onChange.bind(o, n)
                },
                t === n
                  ? e.createElement(
                      "span",
                      { className: "react-datepicker__year-option--selected" },
                      "✓"
                    )
                  : "",
                n
              );
            }),
            r = o.props.minDate ? o.props.minDate.year() : null,
            a = o.props.maxDate ? o.props.maxDate.year() : null;
          return (
            (a &&
              o.state.yearsList.find(function(e) {
                return e === a;
              })) ||
              n.unshift(
                e.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    ref: "upcoming",
                    key: "upcoming",
                    onClick: o.incrementYears
                  },
                  e.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                  })
                )
              ),
            (r &&
              o.state.yearsList.find(function(e) {
                return e === r;
              })) ||
              n.push(
                e.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    ref: "previous",
                    key: "previous",
                    onClick: o.decrementYears
                  },
                  e.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                  })
                )
              ),
            n
          );
        }),
          (o.onChange = function(e) {
            o.props.onChange(e);
          }),
          (o.handleClickOutside = function() {
            o.props.onCancel();
          }),
          (o.shiftYears = function(e) {
            var t = o.state.yearsList.map(function(t) {
              return t + e;
            });
            o.setState({ yearsList: t });
          }),
          (o.incrementYears = function() {
            return o.shiftYears(1);
          }),
          (o.decrementYears = function() {
            return o.shiftYears(-1);
          });
        return (
          (o.state = {
            yearsList: (function(e, t, n, r) {
              for (var o = [], a = 0; 2 * t + 1 > a; a++) {
                var s = e + t - a,
                  i = !0;
                n && (i = n.year() <= s),
                  r && i && (i = r.year() >= s),
                  i && o.push(s);
              }
              return o;
            })(
              o.props.year,
              n.yearDropdownItemNumber || (n.scrollableYearDropdown ? 10 : 5),
              o.props.minDate,
              o.props.maxDate
            )
          }),
          o
        );
      }
      return (
        U(r, t),
        (r.prototype.render = function() {
          var t = n({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable": this.props
              .scrollableYearDropdown
          });
          return e.createElement("div", { className: t }, this.renderOptions());
        }),
        r
      );
    })(e.Component);
  J.propTypes = {
    minDate: t.object,
    maxDate: t.object,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number
  };
  var Q = {
      1: "mon",
      2: "tue",
      3: "wed",
      4: "thu",
      5: "fri",
      6: "sat",
      7: "sun"
    },
    X = r(J),
    Z = (function(t) {
      function n() {
        var r, o, a;
        K(this, n);
        for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
          i[p] = arguments[p];
        return (
          (r = o = G(this, t.call.apply(t, [this].concat(i)))),
          (o.state = { dropdownVisible: !1 }),
          (o.renderSelectOptions = function() {
            for (
              var t = o.props.minDate ? k(o.props.minDate) : 1900,
                n = o.props.maxDate ? k(o.props.maxDate) : 2100,
                r = [],
                a = t;
              n >= a;
              a++
            )
              r.push(e.createElement("option", { key: a, value: a }, a));
            return r;
          }),
          (o.onSelectChange = function(e) {
            o.onChange(e.target.value);
          }),
          (o.renderSelectMode = function() {
            return e.createElement(
              "select",
              {
                value: o.props.year,
                className: "react-datepicker__year-select",
                onChange: o.onSelectChange
              },
              o.renderSelectOptions()
            );
          }),
          (o.renderReadView = function(t) {
            return e.createElement(
              "div",
              {
                key: "read",
                style: { visibility: t ? "visible" : "hidden" },
                className: "react-datepicker__year-read-view",
                onClick: function(e) {
                  return o.toggleDropdown(e);
                }
              },
              e.createElement("span", {
                className: "react-datepicker__year-read-view--down-arrow"
              }),
              e.createElement(
                "span",
                {
                  className: "react-datepicker__year-read-view--selected-year"
                },
                o.props.year
              )
            );
          }),
          (o.renderDropdown = function() {
            return e.createElement(X, {
              key: "dropdown",
              ref: "options",
              year: o.props.year,
              onChange: o.onChange,
              onCancel: o.toggleDropdown,
              minDate: o.props.minDate,
              maxDate: o.props.maxDate,
              scrollableYearDropdown: o.props.scrollableYearDropdown,
              yearDropdownItemNumber: o.props.yearDropdownItemNumber
            });
          }),
          (o.renderScrollMode = function() {
            var e = o.state.dropdownVisible,
              t = [o.renderReadView(!e)];
            return e && t.unshift(o.renderDropdown()), t;
          }),
          (o.onChange = function(e) {
            o.toggleDropdown(), e !== o.props.year && o.props.onChange(e);
          }),
          (o.toggleDropdown = function(e) {
            o.setState(
              { dropdownVisible: !o.state.dropdownVisible },
              function() {
                o.props.adjustDateOnChange &&
                  o.handleYearChange(o.props.date, e);
              }
            );
          }),
          (o.handleYearChange = function(e, t) {
            o.onSelect(e, t), o.setOpen();
          }),
          (o.onSelect = function(e, t) {
            o.props.onSelect && o.props.onSelect(e, t);
          }),
          (o.setOpen = function() {
            o.props.setOpen && o.props.setOpen(!0);
          }),
          (a = r),
          G(o, a)
        );
      }
      return (
        U(n, t),
        (n.prototype.render = function() {
          var t = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              t = this.renderScrollMode();
              break;
            case "select":
              t = this.renderSelectMode();
          }
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" +
                this.props.dropdownMode
            },
            t
          );
        }),
        n
      );
    })(e.Component);
  Z.propTypes = {
    adjustDateOnChange: t.bool,
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    maxDate: t.object,
    minDate: t.object,
    onChange: t.func.isRequired,
    scrollableYearDropdown: t.bool,
    year: t.number.isRequired,
    yearDropdownItemNumber: t.number,
    date: t.object,
    onSelect: t.func,
    setOpen: t.func
  };
  var $ = (function(t) {
    function n() {
      var r, o, a;
      K(this, n);
      for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
        i[p] = arguments[p];
      return (
        (r = o = G(this, t.call.apply(t, [this].concat(i)))),
        (o.renderOptions = function() {
          return o.props.monthNames.map(function(t, n) {
            return e.createElement(
              "div",
              {
                className:
                  o.props.month === n
                    ? "react-datepicker__month-option --selected_month"
                    : "react-datepicker__month-option",
                key: t,
                ref: t,
                onClick: o.onChange.bind(o, n)
              },
              o.props.month === n
                ? e.createElement(
                    "span",
                    { className: "react-datepicker__month-option--selected" },
                    "✓"
                  )
                : "",
              t
            );
          });
        }),
        (o.onChange = function(e) {
          return o.props.onChange(e);
        }),
        (o.handleClickOutside = function() {
          return o.props.onCancel();
        }),
        (a = r),
        G(o, a)
      );
    }
    return (
      U(n, t),
      (n.prototype.render = function() {
        return e.createElement(
          "div",
          { className: "react-datepicker__month-dropdown" },
          this.renderOptions()
        );
      }),
      n
    );
  })(e.Component);
  $.propTypes = {
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    month: t.number.isRequired,
    monthNames: t.arrayOf(t.string.isRequired).isRequired
  };
  var ee = r($),
    te = (function(t) {
      function n() {
        var r, o, a;
        K(this, n);
        for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
          i[p] = arguments[p];
        return (
          (r = o = G(this, t.call.apply(t, [this].concat(i)))),
          (o.state = { dropdownVisible: !1 }),
          (o.renderSelectOptions = function(t) {
            return t.map(function(t, n) {
              return e.createElement("option", { key: n, value: n }, t);
            });
          }),
          (o.renderSelectMode = function(t) {
            return e.createElement(
              "select",
              {
                value: o.props.month,
                className: "react-datepicker__month-select",
                onChange: function(e) {
                  return o.onChange(e.target.value);
                }
              },
              o.renderSelectOptions(t)
            );
          }),
          (o.renderReadView = function(t, n) {
            return e.createElement(
              "div",
              {
                key: "read",
                style: { visibility: t ? "visible" : "hidden" },
                className: "react-datepicker__month-read-view",
                onClick: o.toggleDropdown
              },
              e.createElement("span", {
                className: "react-datepicker__month-read-view--down-arrow"
              }),
              e.createElement(
                "span",
                {
                  className: "react-datepicker__month-read-view--selected-month"
                },
                n[o.props.month]
              )
            );
          }),
          (o.renderDropdown = function(t) {
            return e.createElement(ee, {
              key: "dropdown",
              ref: "options",
              month: o.props.month,
              monthNames: t,
              onChange: o.onChange,
              onCancel: o.toggleDropdown
            });
          }),
          (o.renderScrollMode = function(e) {
            var t = o.state.dropdownVisible,
              n = [o.renderReadView(!t, e)];
            return t && n.unshift(o.renderDropdown(e)), n;
          }),
          (o.onChange = function(e) {
            o.toggleDropdown(), e !== o.props.month && o.props.onChange(e);
          }),
          (o.toggleDropdown = function() {
            return o.setState({ dropdownVisible: !o.state.dropdownVisible });
          }),
          (a = r),
          G(o, a)
        );
      }
      return (
        U(n, t),
        (n.prototype.render = function() {
          var t = this,
            n = (function(e) {
              return o.localeData(e);
            })(this.props.locale),
            r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
              this.props.useShortMonthInDropdown
                ? function(e) {
                    return (function(e, t) {
                      return e.monthsShort(t);
                    })(n, u({ M: e }));
                  }
                : function(e) {
                    return (function(e, t, n) {
                      return e.months(t, n);
                    })(n, u({ M: e }), t.props.dateFormat);
                  }
            ),
            a = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              a = this.renderScrollMode(r);
              break;
            case "select":
              a = this.renderSelectMode(r);
          }
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" +
                this.props.dropdownMode
            },
            a
          );
        }),
        n
      );
    })(e.Component);
  te.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    locale: t.string,
    dateFormat: t.string.isRequired,
    month: t.number.isRequired,
    onChange: t.func.isRequired,
    useShortMonthInDropdown: t.bool
  };
  var ne = (function(t) {
    function r(n) {
      K(this, r);
      var o = G(this, t.call(this, n));
      return (
        (o.renderOptions = function() {
          return o.state.monthYearsList.map(function(t) {
            var n = t.valueOf(),
              r = Y(o.props.date, t) && R(o.props.date, t);
            return e.createElement(
              "div",
              {
                className: r
                  ? "react-datepicker__month-year-option --selected_month-year"
                  : "react-datepicker__month-year-option",
                key: n,
                ref: n,
                onClick: o.onChange.bind(o, n)
              },
              r
                ? e.createElement(
                    "span",
                    {
                      className: "react-datepicker__month-year-option--selected"
                    },
                    "✓"
                  )
                : "",
              f(t, o.props.dateFormat)
            );
          });
        }),
        (o.onChange = function(e) {
          return o.props.onChange(e);
        }),
        (o.handleClickOutside = function() {
          o.props.onCancel();
        }),
        (o.state = {
          monthYearsList: (function(e, t) {
            for (var n = [], r = _(h(e)), o = _(h(t)); !j(r, o); )
              n.push(h(r)), T(r, 1);
            return n;
          })(o.props.minDate, o.props.maxDate)
        }),
        o
      );
    }
    return (
      U(r, t),
      (r.prototype.render = function() {
        var t = n({
          "react-datepicker__month-year-dropdown": !0,
          "react-datepicker__month-year-dropdown--scrollable": this.props
            .scrollableMonthYearDropdown
        });
        return e.createElement("div", { className: t }, this.renderOptions());
      }),
      r
    );
  })(e.Component);
  ne.propTypes = {
    minDate: t.object.isRequired,
    maxDate: t.object.isRequired,
    onCancel: t.func.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool,
    date: t.object.isRequired,
    dateFormat: t.string.isRequired
  };
  var re = r(ne),
    oe = (function(t) {
      function n() {
        var r, o, a;
        K(this, n);
        for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
          i[p] = arguments[p];
        return (
          (r = o = G(this, t.call.apply(t, [this].concat(i)))),
          (o.state = { dropdownVisible: !1 }),
          (o.renderSelectOptions = function() {
            for (
              var t = _(I(o.props.minDate, o.props.locale)),
                n = _(I(o.props.maxDate, o.props.locale)),
                r = [];
              !j(t, n);

            ) {
              var a = t.valueOf();
              r.push(
                e.createElement(
                  "option",
                  { key: a, value: a },
                  f(t, o.props.dateFormat)
                )
              ),
                T(t, 1);
            }
            return r;
          }),
          (o.onSelectChange = function(e) {
            o.onChange(e.target.value);
          }),
          (o.renderSelectMode = function() {
            return e.createElement(
              "select",
              {
                value: _(o.props.date).valueOf(),
                className: "react-datepicker__month-year-select",
                onChange: o.onSelectChange
              },
              o.renderSelectOptions()
            );
          }),
          (o.renderReadView = function(t) {
            var n = f(I(u(o.props.date), o.props.locale), o.props.dateFormat);
            return e.createElement(
              "div",
              {
                key: "read",
                style: { visibility: t ? "visible" : "hidden" },
                className: "react-datepicker__month-year-read-view",
                onClick: function(e) {
                  return o.toggleDropdown(e);
                }
              },
              e.createElement("span", {
                className: "react-datepicker__month-year-read-view--down-arrow"
              }),
              e.createElement(
                "span",
                {
                  className:
                    "react-datepicker__month-year-read-view--selected-month-year"
                },
                n
              )
            );
          }),
          (o.renderDropdown = function() {
            return e.createElement(re, {
              key: "dropdown",
              ref: "options",
              date: o.props.date,
              dateFormat: o.props.dateFormat,
              onChange: o.onChange,
              onCancel: o.toggleDropdown,
              minDate: I(o.props.minDate, o.props.locale),
              maxDate: I(o.props.maxDate, o.props.locale),
              scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
            });
          }),
          (o.renderScrollMode = function() {
            var e = o.state.dropdownVisible,
              t = [o.renderReadView(!e)];
            return e && t.unshift(o.renderDropdown()), t;
          }),
          (o.onChange = function(e) {
            o.toggleDropdown();
            var t = u(parseInt(e));
            (Y(o.props.date, t) && R(o.props.date, t)) || o.props.onChange(t);
          }),
          (o.toggleDropdown = function() {
            return o.setState({ dropdownVisible: !o.state.dropdownVisible });
          }),
          (a = r),
          G(o, a)
        );
      }
      return (
        U(n, t),
        (n.prototype.render = function() {
          var t = void 0;
          switch (this.props.dropdownMode) {
            case "scroll":
              t = this.renderScrollMode();
              break;
            case "select":
              t = this.renderSelectMode();
          }
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" +
                this.props.dropdownMode
            },
            t
          );
        }),
        n
      );
    })(e.Component);
  oe.propTypes = {
    dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
    dateFormat: t.string.isRequired,
    locale: t.string,
    maxDate: t.object.isRequired,
    minDate: t.object.isRequired,
    date: t.object.isRequired,
    onChange: t.func.isRequired,
    scrollableMonthYearDropdown: t.bool
  };
  var ae = (function(t) {
    function r() {
      var e, o, a;
      K(this, r);
      for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
        i[p] = arguments[p];
      return (
        (e = o = G(this, t.call.apply(t, [this].concat(i)))),
        (o.handleClick = function(e) {
          !o.isDisabled() && o.props.onClick && o.props.onClick(e);
        }),
        (o.handleMouseEnter = function(e) {
          !o.isDisabled() && o.props.onMouseEnter && o.props.onMouseEnter(e);
        }),
        (o.isSameDay = function(e) {
          return F(o.props.day, e);
        }),
        (o.isKeyboardSelected = function() {
          return (
            !o.props.inline &&
            !o.isSameDay(o.props.selected) &&
            o.isSameDay(o.props.preSelection)
          );
        }),
        (o.isDisabled = function() {
          return P(o.props.day, o.props);
        }),
        (o.getHighLightedClass = function(e) {
          var t = o.props,
            n = t.day,
            r = t.highlightDates;
          if (!r) return !1;
          var a = n.format("MM.DD.YYYY");
          return r.get(a);
        }),
        (o.isInRange = function() {
          var e = o.props,
            t = e.startDate,
            n = e.endDate;
          return !(!t || !n) && W(e.day, t, n);
        }),
        (o.isInSelectingRange = function() {
          var e = o.props,
            t = e.day,
            n = e.selectsStart,
            r = e.selectsEnd,
            a = e.selectingDate,
            s = e.startDate,
            i = e.endDate;
          return (
            !((!n && !r) || !a || o.isDisabled()) &&
            (n && i && a.isSameOrBefore(i)
              ? W(t, a, i)
              : !!(r && s && a.isSameOrAfter(s)) && W(t, s, a))
          );
        }),
        (o.isSelectingRangeStart = function() {
          if (!o.isInSelectingRange()) return !1;
          var e = o.props,
            t = e.day,
            n = e.startDate;
          return e.selectsStart ? F(t, e.selectingDate) : F(t, n);
        }),
        (o.isSelectingRangeEnd = function() {
          if (!o.isInSelectingRange()) return !1;
          var e = o.props,
            t = e.day,
            n = e.endDate;
          return e.selectsEnd ? F(t, e.selectingDate) : F(t, n);
        }),
        (o.isRangeStart = function() {
          var e = o.props,
            t = e.startDate;
          return !(!t || !e.endDate) && F(t, e.day);
        }),
        (o.isRangeEnd = function() {
          var e = o.props,
            t = e.endDate;
          return !(!e.startDate || !t) && F(t, e.day);
        }),
        (o.isWeekend = function() {
          var e = (function(e) {
            return c(e, "day");
          })(o.props.day);
          return 0 === e || 6 === e;
        }),
        (o.isOutsideMonth = function() {
          return void 0 !== o.props.month && o.props.month !== v(o.props.day);
        }),
        (o.getClassNames = function(e) {
          var t = o.props.dayClassName ? o.props.dayClassName(e) : void 0;
          return n(
            "react-datepicker__day",
            t,
            "react-datepicker__day--" +
              (function(e) {
                return Q[e.isoWeekday()];
              })(o.props.day),
            {
              "react-datepicker__day--disabled": o.isDisabled(),
              "react-datepicker__day--selected": o.isSameDay(o.props.selected),
              "react-datepicker__day--keyboard-selected": o.isKeyboardSelected(),
              "react-datepicker__day--range-start": o.isRangeStart(),
              "react-datepicker__day--range-end": o.isRangeEnd(),
              "react-datepicker__day--in-range": o.isInRange(),
              "react-datepicker__day--in-selecting-range": o.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start": o.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end": o.isSelectingRangeEnd(),
              "react-datepicker__day--today": o.isSameDay(d(o.props.utcOffset)),
              "react-datepicker__day--weekend": o.isWeekend(),
              "react-datepicker__day--outside-month": o.isOutsideMonth()
            },
            o.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        (a = e),
        G(o, a)
      );
    }
    return (
      U(r, t),
      (r.prototype.render = function() {
        return e.createElement(
          "div",
          {
            className: this.getClassNames(this.props.day),
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            "aria-label": "day-" + C(this.props.day),
            role: "option"
          },
          C(this.props.day)
        );
      }),
      r
    );
  })(e.Component);
  ae.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    highlightDates: t.instanceOf(Map),
    inline: t.bool,
    month: t.number,
    onClick: t.func,
    onMouseEnter: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    startDate: t.object,
    utcOffset: t.number
  };
  var se = (function(t) {
    function r() {
      var e, n, o;
      K(this, r);
      for (var a = arguments.length, s = Array(a), i = 0; a > i; i++)
        s[i] = arguments[i];
      return (
        (e = n = G(this, t.call.apply(t, [this].concat(s)))),
        (n.handleClick = function(e) {
          n.props.onClick && n.props.onClick(e);
        }),
        (o = e),
        G(n, o)
      );
    }
    return (
      U(r, t),
      (r.prototype.render = function() {
        return e.createElement(
          "div",
          {
            className: n({
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!this.props.onClick
            }),
            "aria-label": "week-" + this.props.weekNumber,
            onClick: this.handleClick
          },
          this.props.weekNumber
        );
      }),
      r
    );
  })(e.Component);
  se.propTypes = { weekNumber: t.number.isRequired, onClick: t.func };
  var ie = (function(t) {
    function n() {
      var r, o, a;
      K(this, n);
      for (var s = arguments.length, i = Array(s), p = 0; s > p; p++)
        i[p] = arguments[p];
      return (
        (r = o = G(this, t.call.apply(t, [this].concat(i)))),
        (o.handleDayClick = function(e, t) {
          o.props.onDayClick && o.props.onDayClick(e, t);
        }),
        (o.handleDayMouseEnter = function(e) {
          o.props.onDayMouseEnter && o.props.onDayMouseEnter(e);
        }),
        (o.handleWeekClick = function(e, t, n) {
          "function" == typeof o.props.onWeekSelect &&
            o.props.onWeekSelect(e, t, n);
        }),
        (o.formatWeekNumber = function(e) {
          return o.props.formatWeekNumber
            ? o.props.formatWeekNumber(e)
            : (function(e) {
                return c(e, "week");
              })(e);
        }),
        (o.renderDays = function() {
          var t = S(h(o.props.day)),
            n = [],
            r = o.formatWeekNumber(t);
          if (o.props.showWeekNumber) {
            var a = o.props.onWeekSelect
              ? o.handleWeekClick.bind(o, t, r)
              : void 0;
            n.push(
              e.createElement(se, { key: "W", weekNumber: r, onClick: a })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(n) {
              var r = N(h(t), n);
              return e.createElement(ae, {
                key: n,
                day: r,
                month: o.props.month,
                onClick: o.handleDayClick.bind(o, r),
                onMouseEnter: o.handleDayMouseEnter.bind(o, r),
                minDate: o.props.minDate,
                maxDate: o.props.maxDate,
                excludeDates: o.props.excludeDates,
                includeDates: o.props.includeDates,
                inline: o.props.inline,
                highlightDates: o.props.highlightDates,
                selectingDate: o.props.selectingDate,
                filterDate: o.props.filterDate,
                preSelection: o.props.preSelection,
                selected: o.props.selected,
                selectsStart: o.props.selectsStart,
                selectsEnd: o.props.selectsEnd,
                startDate: o.props.startDate,
                endDate: o.props.endDate,
                dayClassName: o.props.dayClassName,
                utcOffset: o.props.utcOffset
              });
            })
          );
        }),
        (a = r),
        G(o, a)
      );
    }
    return (
      U(n, t),
      (n.prototype.render = function() {
        return e.createElement(
          "div",
          { className: "react-datepicker__week" },
          this.renderDays()
        );
      }),
      n
    );
  })(e.Component);
  ie.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    month: t.number,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onWeekSelect: t.func,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumber: t.bool,
    startDate: t.object,
    utcOffset: t.number
  };
  var pe = 6,
    ce = (function(t) {
      function r() {
        var o, a, s;
        K(this, r);
        for (var i = arguments.length, p = Array(i), c = 0; i > c; c++)
          p[c] = arguments[c];
        return (
          (o = a = G(this, t.call.apply(t, [this].concat(p)))),
          (a.handleDayClick = function(e, t) {
            a.props.onDayClick && a.props.onDayClick(e, t);
          }),
          (a.handleDayMouseEnter = function(e) {
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
          }),
          (a.handleMouseLeave = function() {
            a.props.onMouseLeave && a.props.onMouseLeave();
          }),
          (a.isWeekInMonth = function(e) {
            var t = a.props.day,
              n = N(h(e), 6);
            return R(e, t) || R(n, t);
          }),
          (a.renderWeeks = function() {
            for (
              var t = [],
                n = a.props.fixedHeight,
                r = S(_(h(a.props.day))),
                o = 0,
                s = !1;
              ;

            ) {
              if (
                (t.push(
                  e.createElement(ie, {
                    key: o,
                    day: r,
                    month: v(a.props.day),
                    onDayClick: a.handleDayClick,
                    onDayMouseEnter: a.handleDayMouseEnter,
                    onWeekSelect: a.props.onWeekSelect,
                    formatWeekNumber: a.props.formatWeekNumber,
                    minDate: a.props.minDate,
                    maxDate: a.props.maxDate,
                    excludeDates: a.props.excludeDates,
                    includeDates: a.props.includeDates,
                    inline: a.props.inline,
                    highlightDates: a.props.highlightDates,
                    selectingDate: a.props.selectingDate,
                    filterDate: a.props.filterDate,
                    preSelection: a.props.preSelection,
                    selected: a.props.selected,
                    selectsStart: a.props.selectsStart,
                    selectsEnd: a.props.selectsEnd,
                    showWeekNumber: a.props.showWeekNumbers,
                    startDate: a.props.startDate,
                    endDate: a.props.endDate,
                    dayClassName: a.props.dayClassName,
                    utcOffset: a.props.utcOffset
                  })
                ),
                s)
              )
                break;
              o++, (r = O(h(r), 1));
              var i = n && o >= pe,
                p = !n && !a.isWeekInMonth(r);
              if (i || p) {
                if (!a.props.peekNextMonth) break;
                s = !0;
              }
            }
            return t;
          }),
          (a.getClassNames = function() {
            var e = a.props;
            return n("react-datepicker__month", {
              "react-datepicker__month--selecting-range":
                e.selectingDate && (e.selectsStart || e.selectsEnd)
            });
          }),
          (s = o),
          G(a, s)
        );
      }
      return (
        U(r, t),
        (r.prototype.render = function() {
          return e.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              role: "listbox"
            },
            this.renderWeeks()
          );
        }),
        r
      );
    })(e.Component);
  ce.propTypes = {
    day: t.object.isRequired,
    dayClassName: t.func,
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    inline: t.bool,
    maxDate: t.object,
    minDate: t.object,
    onDayClick: t.func,
    onDayMouseEnter: t.func,
    onMouseLeave: t.func,
    onWeekSelect: t.func,
    peekNextMonth: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectingDate: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showWeekNumbers: t.bool,
    startDate: t.object,
    utcOffset: t.number
  };
  var le = (function(t) {
    function n() {
      var r, o, a;
      K(this, n);
      for (var s = arguments.length, p = Array(s), c = 0; s > c; c++)
        p[c] = arguments[c];
      return (
        (r = o = G(this, t.call.apply(t, [this].concat(p)))),
        (o.handleClick = function(e) {
          ((o.props.minTime || o.props.maxTime) && B(e, o.props)) ||
            (o.props.excludeTimes && q(e, o.props.excludeTimes)) ||
            (o.props.includeTimes && !q(e, o.props.includeTimes)) ||
            o.props.onChange(e);
        }),
        (o.liClasses = function(e, t, n) {
          var r = ["react-datepicker__time-list-item"];
          return (
            t === w(e) &&
              n === b(e) &&
              r.push("react-datepicker__time-list-item--selected"),
            (((o.props.minTime || o.props.maxTime) && B(e, o.props)) ||
              (o.props.excludeTimes && q(e, o.props.excludeTimes)) ||
              (o.props.includeTimes && !q(e, o.props.includeTimes))) &&
              r.push("react-datepicker__time-list-item--disabled"),
            o.props.injectTimes &&
              (60 * w(e) + b(e)) % o.props.intervals != 0 &&
              r.push("react-datepicker__time-list-item--injected"),
            r.join(" ")
          );
        }),
        (o.renderTimes = function() {
          for (
            var t = [],
              n = o.props.format ? o.props.format : "hh:mm A",
              r = o.props.intervals,
              a = o.props.selected ? o.props.selected : u(),
              s = w(a),
              p = b(a),
              c = (function(e) {
                return l(e, "day");
              })(u()),
              d = 1440 / r,
              m =
                o.props.injectTimes &&
                o.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              D = 0;
            d > D;
            D++
          ) {
            var y = M(h(c), D * r);
            if ((t.push(y), m)) {
              var g = (function(e, t, n, r, o) {
                for (var a = o.length, s = [], p = 0; a > p; p++) {
                  var c = M(
                      (function(e, t) {
                        return i(e, t, "hours");
                      })(h(e), w(o[p])),
                      b(o[p])
                    ),
                    l = M(h(e), (n + 1) * r);
                  c.isBetween(t, l) && s.push(o[p]);
                }
                return s;
              })(c, y, D, r, m);
              t = t.concat(g);
            }
          }
          return t.map(function(t, r) {
            return e.createElement(
              "li",
              {
                key: r,
                onClick: o.handleClick.bind(o, t),
                className: o.liClasses(t, s, p)
              },
              f(t, n)
            );
          });
        }),
        (a = r),
        G(o, a)
      );
    }
    return (
      U(n, t),
      (n.prototype.componentDidMount = function() {
        var e = 60 / this.props.intervals,
          t = w(this.props.selected ? this.props.selected : u());
        this.list.scrollTop = e * t * 30;
      }),
      (n.prototype.render = function() {
        var t = this,
          n = null;
        return (
          this.props.monthRef && (n = this.props.monthRef.clientHeight - 39),
          e.createElement(
            "div",
            {
              className:
                "react-datepicker__time-container " +
                (this.props.todayButton
                  ? "react-datepicker__time-container--with-today-button"
                  : "")
            },
            e.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker__header--time"
              },
              e.createElement(
                "div",
                { className: "react-datepicker-time__header" },
                this.props.timeCaption
              )
            ),
            e.createElement(
              "div",
              { className: "react-datepicker__time" },
              e.createElement(
                "div",
                { className: "react-datepicker__time-box" },
                e.createElement(
                  "ul",
                  {
                    className: "react-datepicker__time-list",
                    ref: function(e) {
                      t.list = e;
                    },
                    style: n ? { height: n } : {}
                  },
                  this.renderTimes.bind(this)()
                )
              )
            )
          )
        );
      }),
      z(n, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              intervals: 30,
              onTimeChange: function() {},
              todayButton: null,
              timeCaption: "Time"
            };
          }
        }
      ]),
      n
    );
  })(e.Component);
  le.propTypes = {
    format: t.string,
    includeTimes: t.array,
    intervals: t.number,
    selected: t.object,
    onChange: t.func,
    todayButton: t.string,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    monthRef: t.object,
    timeCaption: t.string,
    injectTimes: t.array
  };
  var ue = [
      "react-datepicker__year-select",
      "react-datepicker__month-select",
      "react-datepicker__month-year-select"
    ],
    de = function() {
      var e = (
        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
          .className || ""
      ).split(/\s+/);
      return ue.some(function(t) {
        return e.indexOf(t) >= 0;
      });
    },
    he = (function(t) {
      function r(n) {
        K(this, r);
        var o = G(this, t.call(this, n));
        return (
          (o.handleClickOutside = function(e) {
            o.props.onClickOutside(e);
          }),
          (o.handleDropdownFocus = function(e) {
            de(e.target) && o.props.onDropdownFocus();
          }),
          (o.getDateInView = function() {
            var e = o.props,
              t = e.preSelection,
              n = e.selected,
              r = e.openToDate,
              a = e.utcOffset,
              s = V(o.props),
              i = L(o.props),
              p = d(a),
              c = r || n || t;
            return c || (s && x(p, s) ? s : i && j(p, i) ? i : p);
          }),
          (o.localizeDate = function(e) {
            return I(e, o.props.locale);
          }),
          (o.increaseMonth = function() {
            o.setState({ date: T(h(o.state.date), 1) }, function() {
              return o.handleMonthChange(o.state.date);
            });
          }),
          (o.decreaseMonth = function() {
            o.setState({ date: E(h(o.state.date), 1) }, function() {
              return o.handleMonthChange(o.state.date);
            });
          }),
          (o.handleDayClick = function(e, t) {
            return o.props.onSelect(e, t);
          }),
          (o.handleDayMouseEnter = function(e) {
            return o.setState({ selectingDate: e });
          }),
          (o.handleMonthMouseLeave = function() {
            return o.setState({ selectingDate: null });
          }),
          (o.handleYearChange = function(e) {
            o.props.onYearChange && o.props.onYearChange(e);
          }),
          (o.handleMonthChange = function(e) {
            o.props.onMonthChange && o.props.onMonthChange(e),
              o.props.adjustDateOnChange &&
                (o.props.onSelect && o.props.onSelect(e),
                o.props.setOpen && o.props.setOpen(!0));
          }),
          (o.handleMonthYearChange = function(e) {
            o.handleYearChange(e), o.handleMonthChange(e);
          }),
          (o.changeYear = function(e) {
            o.setState({ date: g(h(o.state.date), e) }, function() {
              return o.handleYearChange(o.state.date);
            });
          }),
          (o.changeMonth = function(e) {
            o.setState({ date: y(h(o.state.date), e) }, function() {
              return o.handleMonthChange(o.state.date);
            });
          }),
          (o.changeMonthYear = function(e) {
            o.setState({ date: g(y(h(o.state.date), v(e)), k(e)) }, function() {
              return o.handleMonthYearChange(o.state.date);
            });
          }),
          (o.header = function() {
            var t = S(
                h(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : o.state.date
                )
              ),
              n = [];
            return (
              o.props.showWeekNumbers &&
                n.push(
                  e.createElement(
                    "div",
                    { key: "W", className: "react-datepicker__day-name" },
                    o.props.weekLabel || "#"
                  )
                ),
              n.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function(n) {
                  var r = N(h(t), n),
                    a = (function(e) {
                      return e.localeData();
                    })(r),
                    s = o.formatWeekday(a, r);
                  return e.createElement(
                    "div",
                    { key: n, className: "react-datepicker__day-name" },
                    s
                  );
                })
              )
            );
          }),
          (o.formatWeekday = function(e, t) {
            return o.props.formatWeekDay
              ? (function(e, t, n) {
                  return n(e.weekdays(t));
                })(e, t, o.props.formatWeekDay)
              : o.props.useWeekdaysShort
                ? (function(e, t) {
                    return e.weekdaysShort(t);
                  })(e, t)
                : (function(e, t) {
                    return e.weekdaysMin(t);
                  })(e, t);
          }),
          (o.renderPreviousMonthButton = function() {
            var t = (function(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.minDate,
                o = n.includeDates,
                a = e.clone().subtract(1, t);
              return (
                (r && a.isBefore(r, t)) ||
                (o &&
                  o.every(function(e) {
                    return a.isBefore(e, t);
                  })) ||
                !1
              );
            })(o.state.date, "month", o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !t) &&
              !o.props.showTimeSelectOnly
            ) {
              var n = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous"
                ],
                r = o.decreaseMonth;
              return (
                t &&
                  o.props.showDisabledMonthNavigation &&
                  (n.push("react-datepicker__navigation--previous--disabled"),
                  (r = null)),
                e.createElement("button", {
                  type: "button",
                  className: n.join(" "),
                  onClick: r
                })
              );
            }
          }),
          (o.renderNextMonthButton = function() {
            var t = (function(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.maxDate,
                o = n.includeDates,
                a = e.clone().add(1, t);
              return (
                (r && a.isAfter(r, t)) ||
                (o &&
                  o.every(function(e) {
                    return a.isAfter(e, t);
                  })) ||
                !1
              );
            })(o.state.date, "month", o.props);
            if (
              (o.props.forceShowMonthNavigation ||
                o.props.showDisabledMonthNavigation ||
                !t) &&
              !o.props.showTimeSelectOnly
            ) {
              var n = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
              ];
              o.props.showTimeSelect &&
                n.push("react-datepicker__navigation--next--with-time"),
                o.props.todayButton &&
                  n.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var r = o.increaseMonth;
              return (
                t &&
                  o.props.showDisabledMonthNavigation &&
                  (n.push("react-datepicker__navigation--next--disabled"),
                  (r = null)),
                e.createElement("button", {
                  type: "button",
                  className: n.join(" "),
                  onClick: r
                })
              );
            }
          }),
          (o.renderCurrentMonth = function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : o.state.date,
              n = ["react-datepicker__current-month"];
            return (
              o.props.showYearDropdown &&
                n.push("react-datepicker__current-month--hasYearDropdown"),
              o.props.showMonthDropdown &&
                n.push("react-datepicker__current-month--hasMonthDropdown"),
              o.props.showMonthYearDropdown &&
                n.push("react-datepicker__current-month--hasMonthYearDropdown"),
              e.createElement(
                "div",
                { className: n.join(" ") },
                f(t, o.props.dateFormat)
              )
            );
          }),
          (o.renderYearDropdown = function() {
            if (
              o.props.showYearDropdown &&
              !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
            )
              return e.createElement(Z, {
                adjustDateOnChange: o.props.adjustDateOnChange,
                date: o.state.date,
                onSelect: o.props.onSelect,
                setOpen: o.props.setOpen,
                dropdownMode: o.props.dropdownMode,
                onChange: o.changeYear,
                minDate: o.props.minDate,
                maxDate: o.props.maxDate,
                year: k(o.state.date),
                scrollableYearDropdown: o.props.scrollableYearDropdown,
                yearDropdownItemNumber: o.props.yearDropdownItemNumber
              });
          }),
          (o.renderMonthDropdown = function() {
            if (
              o.props.showMonthDropdown &&
              !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
            )
              return e.createElement(te, {
                dropdownMode: o.props.dropdownMode,
                locale: o.props.locale,
                dateFormat: o.props.dateFormat,
                onChange: o.changeMonth,
                month: v(o.state.date),
                useShortMonthInDropdown: o.props.useShortMonthInDropdown
              });
          }),
          (o.renderMonthYearDropdown = function() {
            if (
              o.props.showMonthYearDropdown &&
              !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
            )
              return e.createElement(oe, {
                dropdownMode: o.props.dropdownMode,
                locale: o.props.locale,
                dateFormat: o.props.dateFormat,
                onChange: o.changeMonthYear,
                minDate: o.props.minDate,
                maxDate: o.props.maxDate,
                date: o.state.date,
                scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown
              });
          }),
          (o.renderTodayButton = function() {
            if (o.props.todayButton && !o.props.showTimeSelectOnly)
              return e.createElement(
                "div",
                {
                  className: "react-datepicker__today-button",
                  onClick: function(e) {
                    return o.props.onSelect(
                      (function(e) {
                        return l(e, "date");
                      })(d(o.props.utcOffset)),
                      e
                    );
                  }
                },
                o.props.todayButton
              );
          }),
          (o.renderMonths = function() {
            if (!o.props.showTimeSelectOnly) {
              for (var t = [], n = 0; o.props.monthsShown > n; ++n) {
                var r = T(h(o.state.date), n);
                t.push(
                  e.createElement(
                    "div",
                    {
                      key: "month-" + n,
                      ref: function(e) {
                        o.monthContainer = e;
                      },
                      className: "react-datepicker__month-container"
                    },
                    e.createElement(
                      "div",
                      { className: "react-datepicker__header" },
                      o.renderCurrentMonth(r),
                      e.createElement(
                        "div",
                        {
                          className:
                            "react-datepicker__header__dropdown react-datepicker__header__dropdown--" +
                            o.props.dropdownMode,
                          onFocus: o.handleDropdownFocus
                        },
                        o.renderMonthDropdown(0 !== n),
                        o.renderMonthYearDropdown(0 !== n),
                        o.renderYearDropdown(0 !== n)
                      ),
                      e.createElement(
                        "div",
                        { className: "react-datepicker__day-names" },
                        o.header(r)
                      )
                    ),
                    e.createElement(ce, {
                      day: r,
                      dayClassName: o.props.dayClassName,
                      onDayClick: o.handleDayClick,
                      onDayMouseEnter: o.handleDayMouseEnter,
                      onMouseLeave: o.handleMonthMouseLeave,
                      onWeekSelect: o.props.onWeekSelect,
                      formatWeekNumber: o.props.formatWeekNumber,
                      minDate: o.props.minDate,
                      maxDate: o.props.maxDate,
                      excludeDates: o.props.excludeDates,
                      highlightDates: o.props.highlightDates,
                      selectingDate: o.state.selectingDate,
                      includeDates: o.props.includeDates,
                      inline: o.props.inline,
                      fixedHeight: o.props.fixedHeight,
                      filterDate: o.props.filterDate,
                      preSelection: o.props.preSelection,
                      selected: o.props.selected,
                      selectsStart: o.props.selectsStart,
                      selectsEnd: o.props.selectsEnd,
                      showWeekNumbers: o.props.showWeekNumbers,
                      startDate: o.props.startDate,
                      endDate: o.props.endDate,
                      peekNextMonth: o.props.peekNextMonth,
                      utcOffset: o.props.utcOffset
                    })
                  )
                );
              }
              return t;
            }
          }),
          (o.renderTimeSection = function() {
            if (o.props.showTimeSelect)
              return e.createElement(le, {
                selected: o.props.selected,
                onChange: o.props.onTimeChange,
                format: o.props.timeFormat,
                includeTimes: o.props.includeTimes,
                intervals: o.props.timeIntervals,
                minTime: o.props.minTime,
                maxTime: o.props.maxTime,
                excludeTimes: o.props.excludeTimes,
                timeCaption: o.props.timeCaption,
                todayButton: o.props.todayButton,
                showMonthDropdown: o.props.showMonthDropdown,
                showMonthYearDropdown: o.props.showMonthYearDropdown,
                showYearDropdown: o.props.showYearDropdown,
                withPortal: o.props.withPortal,
                monthRef: o.state.monthContainer,
                injectTimes: o.props.injectTimes
              });
          }),
          (o.state = {
            date: o.localizeDate(o.getDateInView()),
            selectingDate: null,
            monthContainer: o.monthContainer
          }),
          o
        );
      }
      return (
        U(r, t),
        z(r, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                onDropdownFocus: function() {},
                monthsShown: 1,
                forceShowMonthNavigation: !1,
                timeCaption: "Time"
              };
            }
          }
        ]),
        (r.prototype.componentDidMount = function() {
          var e = this;
          this.props.showTimeSelect &&
            (this.assignMonthContainer = void e.setState({
              monthContainer: e.monthContainer
            }));
        }),
        (r.prototype.componentWillReceiveProps = function(e) {
          e.preSelection && !F(e.preSelection, this.props.preSelection)
            ? this.setState({ date: this.localizeDate(e.preSelection) })
            : e.openToDate &&
              !F(e.openToDate, this.props.openToDate) &&
              this.setState({ date: this.localizeDate(e.openToDate) });
        }),
        (r.prototype.render = function() {
          return e.createElement(
            "div",
            {
              className: n("react-datepicker", this.props.className, {
                "react-datepicker--time-only": this.props.showTimeSelectOnly
              })
            },
            e.createElement("div", { className: "react-datepicker__triangle" }),
            this.renderPreviousMonthButton(),
            this.renderNextMonthButton(),
            this.renderMonths(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.props.children
          );
        }),
        r
      );
    })(e.Component);
  he.propTypes = {
    adjustDateOnChange: t.bool,
    className: t.string,
    children: t.node,
    dateFormat: t.oneOfType([t.string, t.array]).isRequired,
    dayClassName: t.func,
    dropdownMode: t.oneOf(["scroll", "select"]),
    endDate: t.object,
    excludeDates: t.array,
    filterDate: t.func,
    fixedHeight: t.bool,
    formatWeekNumber: t.func,
    highlightDates: t.instanceOf(Map),
    includeDates: t.array,
    includeTimes: t.array,
    injectTimes: t.array,
    inline: t.bool,
    locale: t.string,
    maxDate: t.object,
    minDate: t.object,
    monthsShown: t.number,
    onClickOutside: t.func.isRequired,
    onMonthChange: t.func,
    onYearChange: t.func,
    forceShowMonthNavigation: t.bool,
    onDropdownFocus: t.func,
    onSelect: t.func.isRequired,
    onWeekSelect: t.func,
    showTimeSelect: t.bool,
    showTimeSelectOnly: t.bool,
    timeFormat: t.string,
    timeIntervals: t.number,
    onTimeChange: t.func,
    minTime: t.object,
    maxTime: t.object,
    excludeTimes: t.array,
    timeCaption: t.string,
    openToDate: t.object,
    peekNextMonth: t.bool,
    scrollableYearDropdown: t.bool,
    scrollableMonthYearDropdown: t.bool,
    preSelection: t.object,
    selected: t.object,
    selectsEnd: t.bool,
    selectsStart: t.bool,
    showMonthDropdown: t.bool,
    showMonthYearDropdown: t.bool,
    showWeekNumbers: t.bool,
    showYearDropdown: t.bool,
    startDate: t.object,
    todayButton: t.string,
    useWeekdaysShort: t.bool,
    formatWeekDay: t.func,
    withPortal: t.bool,
    utcOffset: t.number,
    weekLabel: t.string,
    yearDropdownItemNumber: t.number,
    setOpen: t.func,
    useShortMonthInDropdown: t.bool,
    showDisabledMonthNavigation: t.bool
  };
  var me = [
      "auto",
      "auto-left",
      "auto-right",
      "bottom",
      "bottom-end",
      "bottom-start",
      "left",
      "left-end",
      "left-start",
      "right",
      "right-end",
      "right-start",
      "top",
      "top-end",
      "top-start"
    ],
    fe = (function(t) {
      function r() {
        return K(this, r), G(this, t.apply(this, arguments));
      }
      return (
        U(r, t),
        (r.prototype.render = function() {
          var t = this.props,
            r = t.popperComponent,
            o = t.popperModifiers,
            s = t.popperPlacement,
            i = t.targetComponent,
            p = void 0;
          if (!t.hidePopper) {
            var c = n("react-datepicker-popper", t.className);
            p = e.createElement(
              a.Popper,
              { className: c, modifiers: o, placement: s },
              r
            );
          }
          return (
            this.props.popperContainer &&
              (p = e.createElement(this.props.popperContainer, {}, p)),
            e.createElement(
              a.Manager,
              null,
              e.createElement(
                a.Target,
                { className: "react-datepicker-wrapper" },
                i
              ),
              p
            )
          );
        }),
        z(r, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperPlacement: "bottom-start"
              };
            }
          }
        ]),
        r
      );
    })(e.Component);
  fe.propTypes = {
    className: t.string,
    hidePopper: t.bool,
    popperComponent: t.element,
    popperModifiers: t.object,
    popperPlacement: t.oneOf(me),
    popperContainer: t.func,
    targetComponent: t.element
  };
  var De = "react-datepicker-ignore-onclickoutside",
    ye = r(he),
    ge = (function(t) {
      function r(a) {
        K(this, r);
        var s = G(this, t.call(this, a));
        return (
          (s.getPreSelection = function() {
            return s.props.openToDate
              ? u(s.props.openToDate)
              : s.props.selectsEnd && s.props.startDate
                ? u(s.props.startDate)
                : s.props.selectsStart && s.props.endDate
                  ? u(s.props.endDate)
                  : d(s.props.utcOffset);
          }),
          (s.calcInitialState = function() {
            var e = s.getPreSelection(),
              t = V(s.props),
              n = L(s.props),
              r = t && x(e, t) ? t : n && j(e, n) ? n : e;
            return {
              open: s.props.startOpen || !1,
              preventFocus: !1,
              preSelection: s.props.selected ? u(s.props.selected) : r,
              highlightDates: A(s.props.highlightDates),
              focused: !1
            };
          }),
          (s.clearPreventFocusTimeout = function() {
            s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
          }),
          (s.setFocus = function() {
            s.input && s.input.focus && s.input.focus();
          }),
          (s.setOpen = function(e) {
            s.setState({
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection
            });
          }),
          (s.handleFocus = function(e) {
            s.state.preventFocus ||
              (s.props.onFocus(e), s.props.preventOpenOnFocus || s.setOpen(!0)),
              s.setState({ focused: !0 });
          }),
          (s.cancelFocusInput = function() {
            clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
          }),
          (s.deferFocusInput = function() {
            s.cancelFocusInput(),
              (s.inputFocusTimeout = setTimeout(function() {
                return s.setFocus();
              }, 1));
          }),
          (s.handleDropdownFocus = function() {
            s.cancelFocusInput();
          }),
          (s.handleBlur = function(e) {
            s.state.open ? s.deferFocusInput() : s.props.onBlur(e),
              s.setState({ focused: !1 });
          }),
          (s.handleCalendarClickOutside = function(e) {
            s.props.inline || s.setOpen(!1),
              s.props.onClickOutside(e),
              s.props.withPortal && e.preventDefault();
          }),
          (s.handleChange = function() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
              t[n] = arguments[n];
            var r = t[0];
            if (
              !s.props.onChangeRaw ||
              (s.props.onChangeRaw.apply(s, t),
              "function" == typeof r.isDefaultPrevented &&
                !r.isDefaultPrevented())
            ) {
              s.setState({ inputValue: r.target.value });
              var a = (function(e, t) {
                var n = o(e, t.dateFormat, t.locale || o.locale(), !0);
                return n.isValid() ? n : null;
              })(r.target.value, s.props);
              (!a && r.target.value) || s.setSelected(a, r, !0);
            }
          }),
          (s.handleSelect = function(e, t) {
            s.setState({ preventFocus: !0 }, function() {
              return (
                (s.preventFocusTimeout = setTimeout(function() {
                  return s.setState({ preventFocus: !1 });
                }, 50)),
                s.preventFocusTimeout
              );
            }),
              s.setSelected(e, t),
              !s.props.shouldCloseOnSelect || s.props.showTimeSelect
                ? s.setPreSelection(e)
                : s.props.inline || s.setOpen(!1);
          }),
          (s.setSelected = function(e, t, n) {
            var r = e;
            if (null === r || !P(r, s.props)) {
              if (!F(s.props.selected, r) || s.props.allowSameDay) {
                if (null !== r) {
                  if (s.props.selected) {
                    var o = s.props.selected;
                    n && (o = u(r)),
                      (r = D(u(r), {
                        hour: w(o),
                        minute: b(o),
                        second: (function(e) {
                          return c(e, "second");
                        })(o)
                      }));
                  }
                  s.props.inline || s.setState({ preSelection: r });
                }
                s.props.onChange(r, t);
              }
              s.props.onSelect(r, t), n || s.setState({ inputValue: null });
            }
          }),
          (s.setPreSelection = function(e) {
            (!(void 0 !== s.props.minDate && void 0 !== s.props.maxDate) ||
              !e ||
              W(e, s.props.minDate, s.props.maxDate)) &&
              s.setState({ preSelection: e });
          }),
          (s.handleTimeChange = function(e) {
            var t = D(
              h(s.props.selected ? s.props.selected : s.getPreSelection()),
              { hour: w(e), minute: b(e) }
            );
            s.setState({ preSelection: t }),
              s.props.onChange(t),
              s.setOpen(!1),
              s.setState({ inputValue: null });
          }),
          (s.onInputClick = function() {
            s.props.disabled || s.setOpen(!0);
          }),
          (s.onInputKeyDown = function(e) {
            s.props.onKeyDown(e);
            var t = e.key;
            if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
              var n = u(s.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  m(s.state.preSelection) ||
                  (function(e) {
                    return o.isDate(e);
                  })(s.state.preSelection)
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1);
              else if ("Escape" === t) e.preventDefault(), s.setOpen(!1);
              else if ("Tab" === t) s.setOpen(!1);
              else if (!s.props.disabledKeyboardNavigation) {
                var r = void 0;
                switch (t) {
                  case "ArrowLeft":
                    e.preventDefault(),
                      (r = (function(e, t) {
                        return p(e, t, "days");
                      })(n, 1));
                    break;
                  case "ArrowRight":
                    e.preventDefault(), (r = N(n, 1));
                    break;
                  case "ArrowUp":
                    e.preventDefault(),
                      (r = (function(e, t) {
                        return p(e, t, "weeks");
                      })(n, 1));
                    break;
                  case "ArrowDown":
                    e.preventDefault(), (r = O(n, 1));
                    break;
                  case "PageUp":
                    e.preventDefault(), (r = E(n, 1));
                    break;
                  case "PageDown":
                    e.preventDefault(), (r = T(n, 1));
                    break;
                  case "Home":
                    e.preventDefault(),
                      (r = (function(e, t) {
                        return p(e, t, "years");
                      })(n, 1));
                    break;
                  case "End":
                    e.preventDefault(),
                      (r = (function(e, t) {
                        return i(e, t, "years");
                      })(n, 1));
                }
                s.props.adjustDateOnChange && s.setSelected(r),
                  s.setPreSelection(r);
              }
            } else
              "Enter" !== t &&
                "Escape" !== t &&
                "Tab" !== t &&
                s.onInputClick();
          }),
          (s.onClearClick = function(e) {
            e && e.preventDefault && e.preventDefault(),
              s.props.onChange(null, e),
              s.setState({ inputValue: null });
          }),
          (s.clear = function() {
            s.onClearClick();
          }),
          (s.renderCalendar = function() {
            return s.props.inline || (s.state.open && !s.props.disabled)
              ? e.createElement(
                  ye,
                  {
                    ref: function(e) {
                      s.calendar = e;
                    },
                    locale: s.props.locale,
                    adjustDateOnChange: s.props.adjustDateOnChange,
                    setOpen: s.setOpen,
                    dateFormat: s.props.dateFormatCalendar,
                    useWeekdaysShort: s.props.useWeekdaysShort,
                    formatWeekDay: s.props.formatWeekDay,
                    dropdownMode: s.props.dropdownMode,
                    selected: s.props.selected,
                    preSelection: s.state.preSelection,
                    onSelect: s.handleSelect,
                    onWeekSelect: s.props.onWeekSelect,
                    openToDate: s.props.openToDate,
                    minDate: s.props.minDate,
                    maxDate: s.props.maxDate,
                    selectsStart: s.props.selectsStart,
                    selectsEnd: s.props.selectsEnd,
                    startDate: s.props.startDate,
                    endDate: s.props.endDate,
                    excludeDates: s.props.excludeDates,
                    filterDate: s.props.filterDate,
                    onClickOutside: s.handleCalendarClickOutside,
                    formatWeekNumber: s.props.formatWeekNumber,
                    highlightDates: s.state.highlightDates,
                    includeDates: s.props.includeDates,
                    includeTimes: s.props.includeTimes,
                    injectTimes: s.props.injectTimes,
                    inline: s.props.inline,
                    peekNextMonth: s.props.peekNextMonth,
                    showMonthDropdown: s.props.showMonthDropdown,
                    useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                    showMonthYearDropdown: s.props.showMonthYearDropdown,
                    showWeekNumbers: s.props.showWeekNumbers,
                    showYearDropdown: s.props.showYearDropdown,
                    withPortal: s.props.withPortal,
                    forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                    showDisabledMonthNavigation:
                      s.props.showDisabledMonthNavigation,
                    scrollableYearDropdown: s.props.scrollableYearDropdown,
                    scrollableMonthYearDropdown:
                      s.props.scrollableMonthYearDropdown,
                    todayButton: s.props.todayButton,
                    weekLabel: s.props.weekLabel,
                    utcOffset: s.props.utcOffset,
                    outsideClickIgnoreClass: De,
                    fixedHeight: s.props.fixedHeight,
                    monthsShown: s.props.monthsShown,
                    onDropdownFocus: s.handleDropdownFocus,
                    onMonthChange: s.props.onMonthChange,
                    onYearChange: s.props.onYearChange,
                    dayClassName: s.props.dayClassName,
                    showTimeSelect: s.props.showTimeSelect,
                    showTimeSelectOnly: s.props.showTimeSelectOnly,
                    onTimeChange: s.handleTimeChange,
                    timeFormat: s.props.timeFormat,
                    timeIntervals: s.props.timeIntervals,
                    minTime: s.props.minTime,
                    maxTime: s.props.maxTime,
                    excludeTimes: s.props.excludeTimes,
                    timeCaption: s.props.timeCaption,
                    className: s.props.calendarClassName,
                    yearDropdownItemNumber: s.props.yearDropdownItemNumber
                  },
                  s.props.children
                )
              : null;
          }),
          (s.renderDateInput = function() {
            var t,
              r,
              a = n(s.props.className, ((t = {}), (t[De] = s.state.open), t)),
              i =
                s.props.customInput ||
                e.createElement("input", { type: "text" }),
              p = s.props.customInputRef || "ref",
              c =
                "string" == typeof s.props.value
                  ? s.props.value
                  : "string" == typeof s.state.inputValue
                    ? s.state.inputValue
                    : (function(e, t) {
                        var n = t.dateFormat,
                          r = t.locale;
                        return (
                          (e &&
                            e
                              .clone()
                              .locale(r || o.locale())
                              .format(Array.isArray(n) ? n[0] : n)) ||
                          ""
                        );
                      })(s.props.selected, s.props);
            return e.cloneElement(
              i,
              ((r = {}),
              (r[p] = function(e) {
                s.input = e;
              }),
              (r.value = c),
              (r.onBlur = s.handleBlur),
              (r.onChange = s.handleChange),
              (r.onClick = s.onInputClick),
              (r.onFocus = s.handleFocus),
              (r.onKeyDown = s.onInputKeyDown),
              (r.id = s.props.id),
              (r.name = s.props.name),
              (r.autoFocus = s.props.autoFocus),
              (r.placeholder = s.props.placeholderText),
              (r.disabled = s.props.disabled),
              (r.autoComplete = s.props.autoComplete),
              (r.className = a),
              (r.title = s.props.title),
              (r.readOnly = s.props.readOnly),
              (r.required = s.props.required),
              (r.tabIndex = s.props.tabIndex),
              r)
            );
          }),
          (s.renderClearButton = function() {
            return s.props.isClearable && null != s.props.selected
              ? e.createElement("button", {
                  type: "button",
                  className: "react-datepicker__close-icon",
                  onClick: s.onClearClick,
                  title: s.props.clearButtonTitle,
                  tabIndex: -1
                })
              : null;
          }),
          (s.state = s.calcInitialState()),
          s
        );
      }
      return (
        U(r, t),
        z(r, null, [
          {
            key: "defaultProps",
            get: function() {
              return {
                allowSameDay: !1,
                dateFormat: "L",
                dateFormatCalendar: "MMMM YYYY",
                onChange: function() {},
                disabled: !1,
                disabledKeyboardNavigation: !1,
                dropdownMode: "scroll",
                onFocus: function() {},
                onBlur: function() {},
                onKeyDown: function() {},
                onSelect: function() {},
                onClickOutside: function() {},
                onMonthChange: function() {},
                preventOpenOnFocus: !1,
                onYearChange: function() {},
                monthsShown: 1,
                withPortal: !1,
                shouldCloseOnSelect: !0,
                showTimeSelect: !1,
                timeIntervals: 30,
                timeCaption: "Time"
              };
            }
          }
        ]),
        (r.prototype.componentWillReceiveProps = function(e) {
          this.props.inline &&
            (function(e, t) {
              return e && t ? v(e) !== v(t) || k(e) !== k(t) : e !== t;
            })(this.props.selected, e.selected) &&
            this.setPreSelection(e.selected),
            this.props.highlightDates !== e.highlightDates &&
              this.setState({ highlightDates: A(e.highlightDates) }),
            this.state.focused || this.setState({ inputValue: null });
        }),
        (r.prototype.componentWillUnmount = function() {
          this.clearPreventFocusTimeout();
        }),
        (r.prototype.render = function() {
          var t = this.renderCalendar();
          return this.props.inline && !this.props.withPortal
            ? t
            : this.props.withPortal
              ? e.createElement(
                  "div",
                  null,
                  this.props.inline
                    ? null
                    : e.createElement(
                        "div",
                        { className: "react-datepicker__input-container" },
                        this.renderDateInput(),
                        this.renderClearButton()
                      ),
                  this.state.open || this.props.inline
                    ? e.createElement(
                        "div",
                        { className: "react-datepicker__portal" },
                        t
                      )
                    : null
                )
              : e.createElement(fe, {
                  className: this.props.popperClassName,
                  hidePopper: !this.state.open || this.props.disabled,
                  popperModifiers: this.props.popperModifiers,
                  targetComponent: e.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
                  popperContainer: this.props.popperContainer,
                  popperComponent: t,
                  popperPlacement: this.props.popperPlacement
                });
        }),
        r
      );
    })(e.Component);
  return (
    (ge.propTypes = {
      adjustDateOnChange: t.bool,
      allowSameDay: t.bool,
      autoComplete: t.string,
      autoFocus: t.bool,
      calendarClassName: t.string,
      children: t.node,
      className: t.string,
      customInput: t.element,
      customInputRef: t.string,
      dateFormat: t.oneOfType([t.string, t.array]),
      dateFormatCalendar: t.string,
      dayClassName: t.func,
      disabled: t.bool,
      disabledKeyboardNavigation: t.bool,
      dropdownMode: t.oneOf(["scroll", "select"]).isRequired,
      endDate: t.object,
      excludeDates: t.array,
      filterDate: t.func,
      fixedHeight: t.bool,
      formatWeekNumber: t.func,
      highlightDates: t.array,
      id: t.string,
      includeDates: t.array,
      includeTimes: t.array,
      injectTimes: t.array,
      inline: t.bool,
      isClearable: t.bool,
      locale: t.string,
      maxDate: t.object,
      minDate: t.object,
      monthsShown: t.number,
      name: t.string,
      onBlur: t.func,
      onChange: t.func.isRequired,
      onSelect: t.func,
      onWeekSelect: t.func,
      onClickOutside: t.func,
      onChangeRaw: t.func,
      onFocus: t.func,
      onKeyDown: t.func,
      onMonthChange: t.func,
      onYearChange: t.func,
      openToDate: t.object,
      peekNextMonth: t.bool,
      placeholderText: t.string,
      popperContainer: t.func,
      popperClassName: t.string,
      popperModifiers: t.object,
      popperPlacement: t.oneOf(me),
      preventOpenOnFocus: t.bool,
      readOnly: t.bool,
      required: t.bool,
      scrollableYearDropdown: t.bool,
      scrollableMonthYearDropdown: t.bool,
      selected: t.object,
      selectsEnd: t.bool,
      selectsStart: t.bool,
      showMonthDropdown: t.bool,
      showMonthYearDropdown: t.bool,
      showWeekNumbers: t.bool,
      showYearDropdown: t.bool,
      forceShowMonthNavigation: t.bool,
      showDisabledMonthNavigation: t.bool,
      startDate: t.object,
      startOpen: t.bool,
      tabIndex: t.number,
      timeCaption: t.string,
      title: t.string,
      todayButton: t.string,
      useWeekdaysShort: t.bool,
      formatWeekDay: t.func,
      utcOffset: t.number,
      value: t.string,
      weekLabel: t.string,
      withPortal: t.bool,
      yearDropdownItemNumber: t.number,
      shouldCloseOnSelect: t.bool,
      showTimeSelect: t.bool,
      showTimeSelectOnly: t.bool,
      timeFormat: t.string,
      timeIntervals: t.number,
      minTime: t.object,
      maxTime: t.object,
      excludeTimes: t.array,
      useShortMonthInDropdown: t.bool,
      clearButtonTitle: t.string
    }),
    ge
  );
});
