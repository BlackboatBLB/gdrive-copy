!(function(t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var o = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.i = function(t) {
      return t;
    }),
    (e.d = function(t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
    }),
    (e.n = function(t) {
      var i =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(i, 'a', i), i;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ''),
    e((e.s = 18));
})([
  function(t, e, i) {
    'use strict';
    function n(t) {
      for (var e = 1; e < arguments.length; e += 1) {
        var i = arguments[e];
        for (var n in i) t[n] = i[n];
      }
      return t;
    }
    function o(t, e) {
      e.appendChild(t);
    }
    function r(t, e, i) {
      e.insertBefore(t, i);
    }
    function a(t) {
      t.parentNode.removeChild(t);
    }
    function s(t, e, i) {
      for (var n = i; n < t.length; n += 1) t[n] && t[n].destroy(e);
    }
    function c(t) {
      return document.createElement(t);
    }
    function l(t) {
      return document.createElementNS('http://www.w3.org/2000/svg', t);
    }
    function d(t) {
      return document.createTextNode(t);
    }
    function u(t, e, i) {
      t.addEventListener(e, i, !1);
    }
    function h(t, e, i) {
      t.removeEventListener(e, i, !1);
    }
    function f(t, e, i) {
      t.setAttribute(e, i);
    }
    function p(t, e) {
      return t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
    }
    function b(t, e, i, n) {
      for (var o in e)
        if (o in i) {
          var r = i[o],
            a = n[o];
          if (p(r, a)) {
            var s = e[o];
            if (!s) continue;
            for (var c = 0; c < s.length; c += 1) {
              var l = s[c];
              l.__calling ||
                ((l.__calling = !0), l.call(t, r, a), (l.__calling = !1));
            }
          }
        }
    }
    function v(t) {
      return t ? this._state[t] : this._state;
    }
    function m(t, e) {
      var i = t in this._handlers && this._handlers[t].slice();
      if (i) for (var n = 0; n < i.length; n += 1) i[n].call(this, e);
    }
    function _(t, e, i) {
      var n = i && i.defer ? this._observers.post : this._observers.pre;
      return (
        (n[t] || (n[t] = [])).push(e),
        (i && !1 === i.init) ||
          ((e.__calling = !0),
          e.call(this, this._state[t]),
          (e.__calling = !1)),
        {
          cancel: function() {
            var i = n[t].indexOf(e);
            ~i && n[t].splice(i, 1);
          }
        }
      );
    }
    function g(t, e) {
      if ('teardown' === t) return this.on('destroy', e);
      var i = this._handlers[t] || (this._handlers[t] = []);
      return (
        i.push(e),
        {
          cancel: function() {
            var t = i.indexOf(e);
            ~t && i.splice(t, 1);
          }
        }
      );
    }
    function y(t) {
      this._set(n({}, t)), this._root._flush();
    }
    function w() {
      if (this._renderHooks)
        for (; this._renderHooks.length; ) this._renderHooks.pop()();
    }
    i.d(e, 'm', function() {
      return p;
    }),
      i.d(e, 'h', function() {
        return b;
      }),
      i.d(e, 'g', function() {
        return k;
      }),
      i.d(e, 'b', function() {
        return o;
      }),
      i.d(e, 'd', function() {
        return r;
      }),
      i.d(e, 'e', function() {
        return a;
      }),
      i.d(e, 'n', function() {
        return s;
      }),
      i.d(e, 'a', function() {
        return c;
      }),
      i.d(e, 'l', function() {
        return l;
      }),
      i.d(e, 'i', function() {
        return d;
      }),
      i.d(e, 'j', function() {
        return u;
      }),
      i.d(e, 'k', function() {
        return h;
      }),
      i.d(e, 'c', function() {
        return f;
      }),
      i.d(e, 'f', function() {
        return n;
      });
    var k = { get: v, fire: m, observe: _, on: g, set: y, _flush: w };
  },
  function(t, e, i) {
    'use strict';
    function n() {
      var t = i.i(a.a)('style');
      (t.id = 'svelte-691425387-style'),
        (t.textContent =
          '\n    \n    \n\n    [svelte-691425387].spinner, [svelte-691425387] .spinner {\n        -webkit-animation: icon-spin 0.75s infinite linear;\n        animation: svelte-691425387-icon-spin 0.75s infinite linear;\n        width: 1em;\n        height: 1em;\n        border: 0.25em solid #777;\n        border-right-color: #7CB7DE;\n        border-radius: 50%;\n        display: inline-block;\n    }\n\n\n    \n\n    @-webkit-keyframes icon-spin {\n        [svelte-691425387]0%, [svelte-691425387] 0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        [svelte-691425387]100%, [svelte-691425387] 100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes svelte-691425387-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n'),
        i.i(a.b)(t, document.head);
    }
    function o(t, e) {
      var n = i.i(a.a)('span');
      i.i(a.c)(n, 'svelte-691425387', ''), (n.className = 'rotate-contents');
      var o = i.i(a.a)('i');
      return (
        i.i(a.b)(o, n),
        (o.className = 'spinner'),
        {
          mount: function(t, e) {
            i.i(a.d)(n, t, e);
          },
          destroy: function(t) {
            t && i.i(a.e)(n);
          }
        }
      );
    }
    function r(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        document.getElementById('svelte-691425387-style') || n(),
        (this._fragment = o(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var a = i(0);
    i.i(a.f)(r.prototype, a.g),
      (r.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(a.f)({}, e, t)),
          i.i(a.h)(this, this._observers.pre, t, e),
          i.i(a.h)(this, this._observers.post, t, e);
      }),
      (r.prototype.teardown = r.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = r);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      function n(t) {
        e.handleMouse(t);
      }
      function r(t) {
        e.handleKey(t);
      }
      var a,
        c = i.i(s.i)((a = t.selectText)),
        l = i.i(s.i)('\n\n'),
        d = i.i(s.a)('div');
      d.className = 'folderSelect';
      var u = i.i(s.a)('button');
      i.i(s.b)(u, d),
        (u.type = 'button'),
        (u.id = 'selectFolderButton'),
        (u.className = 'btn btn--small selectFolderButton'),
        i.i(s.b)(i.i(s.i)('Select Folder'), u),
        i.i(s.b)(i.i(s.i)('\n    or\n    '), d);
      var h = i.i(s.a)('label');
      i.i(s.b)(h, d), (h.htmlFor = 'newFolder'), (h.className = 'textfield');
      var f = i.i(s.a)('input');
      i.i(s.b)(f, h),
        (f.type = 'text'),
        (f.id = 'folderTextbox'),
        (f.name = 'newFolder'),
        i.i(s.b)(i.i(s.i)('\n        '), h);
      var p = i.i(s.a)('span');
      i.i(s.b)(p, h),
        (p.className = 'textfield__label'),
        i.i(s.j)(p, 'mouseup', n),
        i.i(s.j)(p, 'keyup', r),
        i.i(s.b)(i.i(s.i)('Paste folder URL (Ctrl-V)'), p);
      var b = i.i(s.i)('\n\n'),
        v = i.i(s.a)('div');
      v.className = 'getFolderErrors';
      var m = i.i(s.i)('\n\n'),
        _ = t.findingFolder && o(t, e),
        g = i.i(s.i)('\n\n\n\n'),
        y = i.i(s.a)('div');
      y.className = 'selectedFolderInfo';
      var w = i.i(s.a)('span');
      i.i(s.b)(w, y),
        (w.className = 'folderName'),
        i.i(s.b)(i.i(s.i)('   \n    '), y);
      var k = i.i(s.a)('button');
      return (
        i.i(s.b)(k, y),
        (k.type = 'reset'),
        (k.className = 'btn  btn--small selectOtherFolder'),
        i.i(s.b)(i.i(s.i)('Select other folder'), k),
        {
          mount: function(t, e) {
            i.i(s.d)(c, t, e),
              i.i(s.d)(l, t, e),
              i.i(s.d)(d, t, e),
              i.i(s.d)(b, t, e),
              i.i(s.d)(v, t, e),
              i.i(s.d)(m, t, e),
              _ && _.mount(t, e),
              i.i(s.d)(g, t, e),
              i.i(s.d)(y, t, e);
          },
          update: function(t, i) {
            a !== (a = i.selectText) && (c.data = a),
              i.findingFolder
                ? _ || ((_ = o(i, e)), _.mount(g.parentNode, g))
                : _ && (_.destroy(!0), (_ = null));
          },
          destroy: function(t) {
            i.i(s.k)(p, 'mouseup', n),
              i.i(s.k)(p, 'keyup', r),
              _ && _.destroy(t),
              t &&
                (i.i(s.e)(c),
                i.i(s.e)(l),
                i.i(s.e)(d),
                i.i(s.e)(b),
                i.i(s.e)(v),
                i.i(s.e)(m),
                i.i(s.e)(g),
                i.i(s.e)(y));
          }
        }
      );
    }
    function o(t, e) {
      var n = i.i(s.a)('div');
      (n.className = 'folderLookup'),
        i.i(s.b)(i.i(s.i)('Finding folder...'), n);
      var o = new a.a({ target: n, _root: e._root });
      return {
        mount: function(t, e) {
          i.i(s.d)(n, t, e);
        },
        destroy: function(t) {
          o.destroy(!1), t && i.i(s.e)(n);
        }
      };
    }
    function r(t) {
      (t = t || {}),
        (this._state = i.i(s.f)(c.data(), t.data)),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._renderHooks = []),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null),
        this._flush();
    }
    var a = i(1),
      s = i(0),
      c = (function() {
        var t = i(17),
          e = i(16),
          n = function(i) {
            if ('' !== i.target.value) {
              clearInterval(interval);
              var n = e(i.target.value);
              google.script.run
                .withSuccessHandler(function(e) {
                  t.setSelectedFolder({
                    srcId: e.id,
                    srcParentId: e.parents[0].id,
                    srcName: e.title,
                    destName: 'Copy of ' + e.title
                  });
                })
                .withFailureHandler(function(t) {
                  $('.folderSelect').hide(),
                    $('.folderLookup').hide(),
                    $('.selectedFolderInfo').show(),
                    $('.getFolderErrors')
                      .text(
                        'Error: ' +
                          t +
                          '<br>You may not have permission to copy this folder.'
                      )
                      .show();
                })
                .getMetadata(n);
            }
            return !1;
          };
        return {
          data: function() {
            return { interval: {} };
          },
          methods: {
            handleMouse: function(t) {
              if (2 === t.button) {
                var e = function() {
                  return n(t);
                };
                return void set({ interval: setInterval(e, 500) });
              }
              n(t);
            },
            handleKey: function(t) {
              n(t);
            }
          }
        };
      })();
    i.i(s.f)(r.prototype, c.methods, s.g),
      (r.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(s.f)({}, e, t)),
          i.i(s.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(s.h)(this, this._observers.post, t, e),
          this._flush();
      }),
      (r.prototype.teardown = r.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = r);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n,
        o = i.i(r.a)('button');
      (o.type = 'submit'), (o.className = 'btn');
      var a = i.i(r.i)((n = t.buttonText));
      return (
        i.i(r.b)(a, o),
        {
          mount: function(t, e) {
            i.i(r.d)(o, t, e);
          },
          update: function(t, e) {
            n !== (n = e.buttonText) && (a.data = n);
          },
          destroy: function(t) {
            t && i.i(r.e)(o);
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var r = i(0);
    i.i(r.f)(o.prototype, r.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(r.f)({}, e, t)),
          i.i(r.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(r.h)(this, this._observers.post, t, e);
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = i(7),
      o = i(5),
      r = i(12),
      a = i(11),
      s = i(10),
      c = i(8),
      l = i(1);
    new n.a({
      target: document.querySelector('#app'),
      data: {
        views: [
          { id: 'about', title: 'About', component: o.a },
          { id: 'start', title: 'Start', component: r.a },
          { id: 'resume', title: 'Resume', component: a.a },
          { id: 'pause', title: 'Pause', component: s.a },
          { id: 'faq', title: 'FAQ', component: c.a }
        ],
        active: 'start'
      },
      components: { About: o.a, Start: r.a, Resume: a.a, Pause: s.a, FAQ: c.a }
    }),
      new l.a({ target: document.getElementById('spinner') });
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = i.i(r.a)('h3');
      i.i(r.b)(i.i(r.i)('General info'), n);
      var o = i.i(r.i)('\n\n'),
        a = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          'This app provides the capability to copy a Google Drive folder.  It will copy all contents of the folder\n    and preserve the internal structure of the files and folders.  Optionally, you can also copy any sharing \n    permissions over to the new folder.'
        ),
        a
      );
      var s = i.i(r.i)('\n\n'),
        c = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          'If a folder is nested within other folders of your Google Drive, it is often convenient to make a new \n    copy in the same location.  This is the default behavior.  However, if you would rather have the copy appear \n    at the top level of your Google Drive, you can select to place your copy at the Root level.'
        ),
        c
      );
      var l = i.i(r.i)('\n\n'),
        d = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          "This app is built and maintained for free by one person, and is in no way affiliated with or supported by \n    Google (other than hosting, which they provide for free). While reporting issues is appreciated, please be \n    aware that the developer's time is limited, and this product does not come with any warranties or guarantees \n    of service."
        ),
        d
      );
      var u = i.i(r.i)('\n\n'),
        h = i.i(r.a)('p');
      i.i(r.b)(i.i(r.i)('This app is licensed under the '), h);
      var f = i.i(r.a)('a');
      i.i(r.b)(f, h),
        (f.href = 'https://opensource.org/licenses/BSD-3-Clause'),
        (f.target = '_blank'),
        i.i(r.b)(i.i(r.i)('3-clause BSD License'), f),
        i.i(r.b)(
          i.i(r.i)(
            '.  Feel free to reuse or distribute this code in any way \n    you see fit. You can find the most up-to-date source code on '
          ),
          h
        );
      var p = i.i(r.a)('a');
      i.i(r.b)(p, h),
        (p.href = 'http://www.github.com/ericyd/gdrive-copy'),
        (p.target = '_blank'),
        i.i(r.b)(i.i(r.i)('Github'), p),
        i.i(r.b)(i.i(r.i)('.'), h);
      var b = i.i(r.i)('\n\n'),
        v = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          'If you would like to run your own version of the code but do not come from a technical background, you can \n    follow '
        ),
        v
      );
      var m = i.i(r.a)('a');
      i.i(r.b)(m, v),
        (m.href =
          'https://github.com/ericyd/gdrive-copy/blob/master/howto_for_non-developers.md'),
        (m.target = '_blank'),
        i.i(r.b)(i.i(r.i)('this guide'), m),
        i.i(r.b)(
          i.i(r.i)(' to launch your own, private version of the app.'),
          v
        );
      var _ = i.i(r.i)('\n\n'),
        g = i.i(r.a)('h3');
      i.i(r.b)(i.i(r.i)('Getting started'), g);
      var y = i.i(r.i)('\n\n'),
        w = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          'To get started, simply select your folder and choose a new name, then select Copy Folder!'
        ),
        w
      );
      var k = i.i(r.a)('br');
      i.i(r.b)(k, w),
        i.i(r.b)(
          i.i(r.i)(
            '\n    If the folder copy get\'s stuck, simply use the "Resume prior folder copy" button, then select the copy of \n    your folder.'
          ),
          w
        );
      var N = i.i(r.i)('\n\n'),
        x = i.i(r.a)('h3');
      i.i(r.b)(i.i(r.i)('When issues arise...'), x);
      var I = i.i(r.i)('\n\n'),
        O = i.i(r.a)('p');
      i.i(r.b)(
        i.i(r.i)(
          'Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for \n    whatever reason, simply select the '
        ),
        O
      );
      var T = i.i(r.a)('b');
      i.i(r.b)(T, O);
      var j = i.i(r.a)('i');
      return (
        i.i(r.b)(j, T),
        i.i(r.b)(i.i(r.i)('new, incomplete copy'), j),
        i.i(r.b)(
          i.i(r.i)(' of the folder and select "Resume \n    copying".'),
          O
        ),
        {
          mount: function(t, e) {
            i.i(r.d)(n, t, e),
              i.i(r.d)(o, t, e),
              i.i(r.d)(a, t, e),
              i.i(r.d)(s, t, e),
              i.i(r.d)(c, t, e),
              i.i(r.d)(l, t, e),
              i.i(r.d)(d, t, e),
              i.i(r.d)(u, t, e),
              i.i(r.d)(h, t, e),
              i.i(r.d)(b, t, e),
              i.i(r.d)(v, t, e),
              i.i(r.d)(_, t, e),
              i.i(r.d)(g, t, e),
              i.i(r.d)(y, t, e),
              i.i(r.d)(w, t, e),
              i.i(r.d)(N, t, e),
              i.i(r.d)(x, t, e),
              i.i(r.d)(I, t, e),
              i.i(r.d)(O, t, e);
          },
          destroy: function(t) {
            t &&
              (i.i(r.e)(n),
              i.i(r.e)(o),
              i.i(r.e)(a),
              i.i(r.e)(s),
              i.i(r.e)(c),
              i.i(r.e)(l),
              i.i(r.e)(d),
              i.i(r.e)(u),
              i.i(r.e)(h),
              i.i(r.e)(b),
              i.i(r.e)(v),
              i.i(r.e)(_),
              i.i(r.e)(g),
              i.i(r.e)(y),
              i.i(r.e)(w),
              i.i(r.e)(N),
              i.i(r.e)(x),
              i.i(r.e)(I),
              i.i(r.e)(O));
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var r = i(0);
    i.i(r.f)(o.prototype, r.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(r.f)({}, e, t)),
          i.i(r.h)(this, this._observers.pre, t, e),
          i.i(r.h)(this, this._observers.post, t, e);
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      function n(t) {
        return 'production' === t.env ? r : a;
      }
      var s,
        c = i.i(l.a)('div');
      c.className = 'change-account__box';
      var d = i.i(l.a)('span');
      i.i(l.b)(d, c), (d.className = 'userEmail');
      var u = i.i(l.i)((s = t.message));
      i.i(l.b)(u, d), i.i(l.b)(i.i(l.i)('\n        '), d);
      var h = t.processing && o(t, e);
      h && h.mount(d, null), i.i(l.b)(i.i(l.i)('\n    '), c);
      var f = i.i(l.a)('br');
      i.i(l.b)(f, c), i.i(l.b)(i.i(l.i)('\n    '), c);
      var p = n(t),
        b = p(t, e);
      return (
        b.mount(c, null),
        {
          mount: function(t, e) {
            i.i(l.d)(c, t, e);
          },
          update: function(t, i) {
            s !== (s = i.message) && (u.data = s),
              i.processing
                ? h || ((h = o(i, e)), h.mount(d, null))
                : h && (h.destroy(!0), (h = null)),
              p !== (p = n(i)) &&
                (b.destroy(!0), (b = p(i, e)), b.mount(c, null));
          },
          destroy: function(t) {
            h && h.destroy(!1), b.destroy(!1), t && i.i(l.e)(c);
          }
        }
      );
    }
    function o(t, e) {
      var i = new c.a({ target: null, _root: e._root });
      return {
        mount: function(t, e) {
          i._fragment.mount(t, e);
        },
        destroy: function(t) {
          i.destroy(t);
        }
      };
    }
    function r(t, e) {
      var n = i.i(l.a)('a');
      (n.target = '_blank'),
        (n.href =
          'https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbxbGNGajrxv-HbX2sVY2OTu7yj9VvxlOMOeQblZFuq7rYm7uyo/exec'),
        i.i(l.b)(i.i(l.i)('Click here'), n);
      var o = i.i(l.i)(' to log in with a different account.');
      return {
        mount: function(t, e) {
          i.i(l.d)(n, t, e), i.i(l.d)(o, t, e);
        },
        destroy: function(t) {
          t && (i.i(l.e)(n), i.i(l.e)(o));
        }
      };
    }
    function a(t, e) {
      var n = i.i(l.a)('a');
      (n.target = '_blank'),
        (n.href =
          'https://accounts.google.com/AccountChooser?continue=https://script.google.com/macros/s/AKfycbzKJQO5CBf7WDmrYo8FGDb20YWfoIyUZZhsbF844SI/dev'),
        i.i(l.b)(i.i(l.i)('Click here'), n);
      var o = i.i(l.i)(' to log in with a different account.');
      return {
        mount: function(t, e) {
          i.i(l.d)(n, t, e), i.i(l.d)(o, t, e);
        },
        destroy: function(t) {
          t && (i.i(l.e)(n), i.i(l.e)(o));
        }
      };
    }
    function s(t) {
      (t = t || {}),
        (this._state = i.i(l.f)(d.data(), t.data)),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._renderHooks = []),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null),
        this._flush(),
        t._root
          ? t._root._renderHooks.push(d.oncreate.bind(this))
          : d.oncreate.call(this);
    }
    var c = i(1),
      l = i(0),
      d = (function() {
        return {
          data: function() {
            return {
              env: 'production',
              message: 'Logged in as ',
              processing: !0
            };
          },
          oncreate: function() {
            var t = this;
            try {
              google.script.run
                .withSuccessHandler(function(e) {
                  t.set({ message: 'Logged in as ' + e + '.', processing: !1 });
                })
                .withFailureHandler(function(e) {
                  t.set({
                    message: 'Error retrieving active account.',
                    processing: !1
                  });
                })
                .getUserEmail();
            } catch (e) {
              t.set({
                message: 'Error retrieving active account',
                processing: !1
              });
            }
          }
        };
      })();
    i.i(l.f)(s.prototype, l.g),
      (s.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(l.f)({}, e, t)),
          i.i(l.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(l.h)(this, this._observers.post, t, e),
          this._flush();
      }),
      (s.prototype.teardown = s.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = s);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = !1,
        o = !1,
        s = { views: t.views };
      'active' in t && (s.active = t.active);
      var l = new r.a({ target: null, _root: e._root, data: s });
      l.on('click', function(t) {
        e.setActive(t.view.id);
      }),
        e._bindings.push(function() {
          l._torndown ||
            l.observe(
              'active',
              function(t) {
                n || ((n = !0), e._set({ active: t }), (n = !1));
              },
              { init: i.i(c.m)(l.get('active'), t.active) }
            );
        }),
        (l._context = { state: t });
      var d = i.i(c.i)('\n'),
        u = { views: t.views };
      'active' in t && (u.active = t.active);
      var h = new a.a({ target: null, _root: e._root, data: u });
      return (
        e._bindings.push(function() {
          h._torndown ||
            h.observe(
              'active',
              function(t) {
                o || ((o = !0), e._set({ active: t }), (o = !1));
              },
              { init: i.i(c.m)(h.get('active'), t.active) }
            );
        }),
        (h._context = { state: t }),
        {
          mount: function(t, e) {
            l._fragment.mount(t, e), i.i(c.d)(d, t, e), h._fragment.mount(t, e);
          },
          update: function(t, e) {
            !n &&
              'active' in t &&
              ((n = !0), l._set({ active: e.active }), (n = !1)),
              (l._context.state = e);
            var i = {};
            'views' in t && (i.views = e.views),
              Object.keys(i).length && l.set(i),
              !o &&
                'active' in t &&
                ((o = !0), h._set({ active: e.active }), (o = !1)),
              (h._context.state = e);
            var r = {};
            'views' in t && (r.views = e.views),
              Object.keys(r).length && h.set(r);
          },
          destroy: function(t) {
            l.destroy(t), h.destroy(t), t && i.i(c.e)(d);
          }
        }
      );
    }
    function o(t) {
      for (
        t = t || {},
          this._state = t.data || {},
          this._observers = {
            pre: Object.create(null),
            post: Object.create(null)
          },
          this._handlers = Object.create(null),
          this._root = t._root || this,
          this._yield = t._yield,
          this._torndown = !1,
          this._renderHooks = [],
          this._bindings = [],
          this._fragment = n(this._state, this),
          t.target && this._fragment.mount(t.target, null);
        this._bindings.length;

      )
        this._bindings.pop()();
      this._flush(),
        t._root
          ? t._root._renderHooks.push(l.oncreate.bind(this))
          : l.oncreate.call(this);
    }
    var r = i(9),
      a = i(13),
      s = i(6),
      c = i(0),
      l = (function() {
        return {
          methods: {
            setActive: function(t) {
              this.set({ active: t });
            }
          },
          oncreate: function() {
            new s.a({ target: document.getElementById('change-account') });
          }
        };
      })();
    i.i(c.f)(o.prototype, l.methods, c.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        for (
          this._state = i.i(c.f)({}, e, t),
            i.i(c.h)(this, this._observers.pre, t, e),
            this._fragment.update(t, this._state),
            i.i(c.h)(this, this._observers.post, t, e);
          this._bindings.length;

        )
          this._bindings.pop()();
        this._flush();
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = i.i(r.a)('a');
      i.i(r.c)(n, 'name', 'top');
      var o = i.i(r.i)('\n'),
        a = i.i(r.a)('ul'),
        s = i.i(r.a)('li');
      i.i(r.b)(s, a);
      var c = i.i(r.a)('a');
      i.i(r.b)(c, s),
        (c.href = '#longerThan2Mins'),
        i.i(r.b)(
          i.i(r.i)(
            "The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"
          ),
          c
        );
      var l = i.i(r.a)('li');
      i.i(r.b)(l, a);
      var d = i.i(r.a)('a');
      i.i(r.b)(d, l),
        (d.href = '#copyBetweenDomains'),
        i.i(r.b)(
          i.i(r.i)('Can I use this app to copy a folder between domains?'),
          d
        );
      var u = i.i(r.a)('li');
      i.i(r.b)(u, a);
      var h = i.i(r.a)('a');
      i.i(r.b)(h, u),
        (h.href = '#whenIsItDone'),
        i.i(r.b)(i.i(r.i)('How do I know when it is done?'), h);
      var f = i.i(r.a)('li');
      i.i(r.b)(f, a);
      var p = i.i(r.a)('a');
      i.i(r.b)(p, f),
        (p.href = '#notEverythingCopied'),
        i.i(r.b)(i.i(r.i)("It didn't copy everything - what do I do?"), p);
      var b = i.i(r.a)('li');
      i.i(r.b)(b, a);
      var v = i.i(r.a)('a');
      i.i(r.b)(v, b),
        (v.href = '#multipleAccounts'),
        i.i(r.b)(
          i.i(r.i)('How do I sign into a different account with this app?'),
          v
        );
      var m = i.i(r.a)('li');
      i.i(r.b)(m, a);
      var _ = i.i(r.a)('a');
      i.i(r.b)(_, m),
        (_.href = '#infiniteLoop'),
        i.i(r.b)(
          i.i(r.i)(
            'HELP! The copying is stuck in an infinite loop!  What do I do?'
          ),
          _
        );
      var g = i.i(r.a)('li');
      i.i(r.b)(g, a);
      var y = i.i(r.a)('a');
      i.i(r.b)(y, g),
        (y.href = '#uninstall'),
        i.i(r.b)(
          i.i(r.i)('How do I unintall the app and remove all permissions?'),
          y
        );
      var w = i.i(r.a)('li');
      i.i(r.b)(w, a);
      var k = i.i(r.a)('a');
      i.i(r.b)(k, w),
        (k.href = '#openissue'),
        i.i(r.b)(i.i(r.i)('How do I report a bug in the app?'), k);
      var N = i.i(r.i)('\n\n\n'),
        x = i.i(r.a)('h4'),
        I = i.i(r.a)('a');
      i.i(r.b)(I, x),
        i.i(r.c)(I, 'name', 'longerThan2Mins'),
        i.i(r.b)(
          i.i(r.i)(
            "The copying has been paused longer than 2 minutes and it isn't complete.  What do I do?"
          ),
          x
        );
      var O = i.i(r.i)('\n'),
        T = i.i(r.a)('div');
      (T.className = 'description'),
        i.i(r.b)(
          i.i(r.i)(
            'When the app stops, you can use the "Resume" button to restart the copying.  When selecting the folder to resume, you must select the '
          ),
          T
        );
      var j = i.i(r.a)('b');
      i.i(r.b)(j, T),
        i.i(r.b)(i.i(r.i)('in-progress'), j),
        i.i(r.b)(i.i(r.i)(' folder, '), T);
      var F = i.i(r.a)('b');
      i.i(r.b)(F, T),
        i.i(r.b)(i.i(r.i)('not'), F),
        i.i(r.b)(i.i(r.i)(' the original.'), T);
      var S = i.i(r.a)('br');
      i.i(r.b)(S, T);
      var C = i.i(r.a)('br');
      i.i(r.b)(C, T),
        i.i(r.b)(
          i.i(r.i)(
            '\n    For example, if you are creating a copy of "Folder A" called "Copy of Folder A", you should select "Copy of Folder A" when you resume the copying.  Selecting the original folder will return an error.'
          ),
          T
        );
      var E = i.i(r.i)('\n'),
        A = i.i(r.a)('a');
      (A.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), A);
      var H = i.i(r.i)('\n\n'),
        B = i.i(r.a)('h4'),
        P = i.i(r.a)('a');
      i.i(r.b)(P, B),
        i.i(r.c)(P, 'name', 'copyBetweenDomains'),
        i.i(r.b)(
          i.i(r.i)('Can I use this app to copy a folder between domains?'),
          B
        );
      var D = i.i(r.i)('\n'),
        L = i.i(r.a)('div');
      (L.className = 'description'),
        i.i(r.b)(i.i(r.i)('Yes!  Follow the steps below:\n    '), L);
      var $ = i.i(r.a)('ol');
      i.i(r.b)($, L);
      var G = i.i(r.a)('li');
      i.i(r.b)(G, $),
        i.i(r.b)(
          i.i(r.i)('Log into the account that owns the folder ("Account 1")'),
          G
        );
      var M = i.i(r.a)('li');
      i.i(r.b)(M, $),
        i.i(r.b)(
          i.i(r.i)(
            'Share the folder with the domain to which you\'d like to copy ("Account 2")'
          ),
          M
        );
      var R = i.i(r.a)('li');
      i.i(r.b)(R, $),
        i.i(r.b)(
          i.i(r.i)('Open an private/incognito window and log into Account 2'),
          R
        );
      var Y = i.i(r.a)('li');
      i.i(r.b)(Y, $),
        i.i(r.b)(
          i.i(r.i)(
            'Go to the "Shared with me" section, right click the folder, and select "Add to Drive"'
          ),
          Y
        );
      var W = i.i(r.a)('li');
      i.i(r.b)(W, $),
        i.i(r.b)(
          i.i(r.i)('Open the app, and select the folder that has been shared'),
          W
        );
      var q = i.i(r.a)('li');
      i.i(r.b)(q, $),
        i.i(r.b)(
          i.i(r.i)('Create a copy and Account 2 will now be the owner'),
          q
        );
      var V = i.i(r.i)('\n'),
        z = i.i(r.a)('a');
      (z.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), z);
      var U = i.i(r.i)('\n\n'),
        K = i.i(r.a)('h4'),
        Q = i.i(r.a)('a');
      i.i(r.b)(Q, K),
        i.i(r.c)(Q, 'name', 'whenIsItDone'),
        i.i(r.b)(i.i(r.i)('How do I know when it is done?'), K);
      var Z = i.i(r.i)('\n'),
        J = i.i(r.a)('div');
      (J.className = 'description'),
        i.i(r.b)(
          i.i(r.i)(
            'You will know it is complete when the Copy Log says "Complete" in cell C2.  In addition, the cell will highlight green.'
          ),
          J
        );
      var X = i.i(r.i)('\n'),
        tt = i.i(r.a)('a');
      (tt.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), tt);
      var et = i.i(r.i)('\n\n\n'),
        it = i.i(r.a)('h4'),
        nt = i.i(r.a)('a');
      i.i(r.b)(nt, it),
        i.i(r.c)(nt, 'name', 'notEverythingCopied'),
        i.i(r.b)(i.i(r.i)("It didn't copy everything - what do I do?"), it);
      var ot = i.i(r.i)('\n'),
        rt = i.i(r.a)('div');
      (rt.className = 'description'),
        i.i(r.b)(
          i.i(r.i)(
            'Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\n    '
          ),
          rt
        );
      var at = i.i(r.a)('ol');
      i.i(r.b)(at, rt);
      var st = i.i(r.a)('li');
      i.i(r.b)(st, at),
        i.i(r.b)(
          i.i(r.i)(
            'Audit the Copy Log for any errors, and manually copy those files'
          ),
          st
        );
      var ct = i.i(r.a)('li');
      i.i(r.b)(ct, at),
        i.i(r.b)(
          i.i(r.i)(
            'Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors'
          ),
          ct
        );
      var lt = i.i(r.i)('\n'),
        dt = i.i(r.a)('a');
      (dt.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), dt);
      var ut = i.i(r.i)('\n\n\n'),
        ht = i.i(r.a)('h4'),
        ft = i.i(r.a)('a');
      i.i(r.b)(ft, ht),
        i.i(r.c)(ft, 'name', 'multipleAccounts'),
        i.i(r.b)(
          i.i(r.i)('How do I sign into a different account with this app?'),
          ht
        );
      var pt = i.i(r.i)('\n'),
        bt = i.i(r.a)('div');
      (bt.className = 'description'),
        i.i(r.b)(
          i.i(r.i)(
            "There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account."
          ),
          bt
        );
      var vt = i.i(r.a)('br');
      i.i(r.b)(vt, bt);
      var mt = i.i(r.a)('br');
      i.i(r.b)(mt, bt),
        i.i(r.b)(
          i.i(r.i)(
            '\n    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\n    \n    '
          ),
          bt
        );
      var _t = i.i(r.a)('br');
      i.i(r.b)(_t, bt);
      var gt = i.i(r.a)('br');
      i.i(r.b)(gt, bt),
        i.i(r.b)(
          i.i(r.i)(
            '*If you think this is a good feature, please feel free to open an\n    '
          ),
          bt
        );
      var yt = i.i(r.a)('span');
      i.i(r.b)(yt, bt), (yt.className = 'github-button-wrapper');
      var wt = i.i(r.a)('a');
      i.i(r.b)(wt, yt),
        (wt.className = 'github-button'),
        (wt.href = 'https://github.com/ericyd/gdrive-copy/issues'),
        i.i(r.c)(wt, 'data-icon', 'octicon-issue-opened'),
        i.i(r.c)(wt, 'data-style', 'mega'),
        i.i(r.c)(wt, 'aria-label', 'Issue ericyd/gdrive-copy on GitHub'),
        i.i(r.b)(i.i(r.i)('Issue'), wt),
        i.i(r.b)(
          i.i(r.i)(
            " on Github., or better yet, contribute to the repo! 'Cuz I don't know how to add an Account Switcher, otherwise I would have done it already :)"
          ),
          bt
        );
      var kt = i.i(r.i)('\n'),
        Nt = i.i(r.a)('a');
      (Nt.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), Nt);
      var xt = i.i(r.i)('\n\n\n'),
        It = i.i(r.a)('h4'),
        Ot = i.i(r.a)('a');
      i.i(r.b)(Ot, It),
        i.i(r.c)(Ot, 'name', 'infiniteLoop'),
        i.i(r.b)(
          i.i(r.i)(
            'HELP! The copying is stuck in an infinite loop!  What do I do?'
          ),
          It
        );
      var Tt = i.i(r.i)('\n'),
        jt = i.i(r.a)('div');
      (jt.className = 'description'),
        i.i(r.b)(
          i.i(r.i)('Please use the "Pause" function built into the app and '),
          jt
        );
      var Ft = i.i(r.a)('a');
      i.i(r.b)(Ft, jt),
        (Ft.href = 'https://github.com/ericyd/gdrive-copy/issues'),
        (Ft.target = '_blank'),
        i.i(r.b)(i.i(r.i)('report the bug'), Ft);
      var St = i.i(r.i)('\n'),
        Ct = i.i(r.a)('a');
      (Ct.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), Ct);
      var Et = i.i(r.i)('\n\n\n'),
        At = i.i(r.a)('h4'),
        Ht = i.i(r.a)('a');
      i.i(r.b)(Ht, At),
        i.i(r.c)(Ht, 'name', 'uninstall'),
        i.i(r.b)(
          i.i(r.i)('How do I unintall the app and remove all permissions?'),
          At
        );
      var Bt = i.i(r.i)('\n'),
        Pt = i.i(r.a)('div');
      (Pt.className = 'description'), i.i(r.b)(i.i(r.i)('To quote '), Pt);
      var Dt = i.i(r.a)('a');
      i.i(r.b)(Dt, Pt),
        (Dt.href =
          'https://webapps.stackexchange.com/questions/30841/how-do-i-remove-permission-from-an-app-that-i-gave-google-oauth-access-to'),
        i.i(r.b)(i.i(r.i)('the excellent answer on stackexchange:'), Dt),
        i.i(r.b)(i.i(r.i)('\n    '), Pt);
      var Lt = i.i(r.a)('ol');
      i.i(r.b)(Lt, Pt);
      var $t = i.i(r.a)('li');
      i.i(r.b)($t, Lt), i.i(r.b)(i.i(r.i)('Go to '), $t);
      var Gt = i.i(r.a)('a');
      i.i(r.b)(Gt, $t),
        (Gt.href = 'https://accounts.google.com'),
        i.i(r.b)(i.i(r.i)('accounts.google.com'), Gt);
      var Mt = i.i(r.a)('li');
      i.i(r.b)(Mt, Lt),
        i.i(r.b)(
          i.i(r.i)(
            'Under "Sign-in & security" tab click "Connected apps & sites"'
          ),
          Mt
        );
      var Rt = i.i(r.a)('li');
      i.i(r.b)(Rt, Lt),
        i.i(r.b)(
          i.i(r.i)(
            'Under the section "Apps connected to your account", click on MANAGE APPS:'
          ),
          Rt
        );
      var Yt = i.i(r.a)('li');
      i.i(r.b)(Yt, Lt),
        i.i(r.b)(i.i(r.i)('Select app you want & click REMOVE button'), Yt);
      var Wt = i.i(r.i)('\n'),
        qt = i.i(r.a)('a');
      (qt.href = '#top'), i.i(r.b)(i.i(r.i)('Top'), qt);
      var Vt = i.i(r.i)('\n\n'),
        zt = i.i(r.a)('h4'),
        Ut = i.i(r.a)('a');
      i.i(r.b)(Ut, zt),
        i.i(r.c)(Ut, 'name', 'openissue'),
        i.i(r.b)(i.i(r.i)('How do I report a bug in the app?'), zt);
      var Kt = i.i(r.i)('\n'),
        Qt = i.i(r.a)('div');
      (Qt.className = 'description'),
        i.i(r.b)(
          i.i(r.i)(
            'If you have found a bug that is not covered in these FAQs, please open an\n    '
          ),
          Qt
        );
      var Zt = i.i(r.a)('span');
      i.i(r.b)(Zt, Qt), (Zt.className = 'github-button-wrapper');
      var Jt = i.i(r.a)('a');
      i.i(r.b)(Jt, Zt),
        (Jt.className = 'github-button'),
        (Jt.href = 'https://github.com/ericyd/gdrive-copy/issues'),
        i.i(r.c)(Jt, 'data-icon', 'octicon-issue-opened'),
        i.i(r.c)(Jt, 'data-style', 'mega'),
        i.i(r.c)(Jt, 'aria-label', 'Issue ericyd/gdrive-copy on GitHub'),
        i.i(r.b)(i.i(r.i)('Issue'), Jt),
        i.i(r.b)(i.i(r.i)(' on Github.'), Qt);
      var Xt = i.i(r.i)('\n'),
        te = i.i(r.a)('a');
      return (
        (te.href = '#top'),
        i.i(r.b)(i.i(r.i)('Top'), te),
        {
          mount: function(t, e) {
            i.i(r.d)(n, t, e),
              i.i(r.d)(o, t, e),
              i.i(r.d)(a, t, e),
              i.i(r.d)(N, t, e),
              i.i(r.d)(x, t, e),
              i.i(r.d)(O, t, e),
              i.i(r.d)(T, t, e),
              i.i(r.d)(E, t, e),
              i.i(r.d)(A, t, e),
              i.i(r.d)(H, t, e),
              i.i(r.d)(B, t, e),
              i.i(r.d)(D, t, e),
              i.i(r.d)(L, t, e),
              i.i(r.d)(V, t, e),
              i.i(r.d)(z, t, e),
              i.i(r.d)(U, t, e),
              i.i(r.d)(K, t, e),
              i.i(r.d)(Z, t, e),
              i.i(r.d)(J, t, e),
              i.i(r.d)(X, t, e),
              i.i(r.d)(tt, t, e),
              i.i(r.d)(et, t, e),
              i.i(r.d)(it, t, e),
              i.i(r.d)(ot, t, e),
              i.i(r.d)(rt, t, e),
              i.i(r.d)(lt, t, e),
              i.i(r.d)(dt, t, e),
              i.i(r.d)(ut, t, e),
              i.i(r.d)(ht, t, e),
              i.i(r.d)(pt, t, e),
              i.i(r.d)(bt, t, e),
              i.i(r.d)(kt, t, e),
              i.i(r.d)(Nt, t, e),
              i.i(r.d)(xt, t, e),
              i.i(r.d)(It, t, e),
              i.i(r.d)(Tt, t, e),
              i.i(r.d)(jt, t, e),
              i.i(r.d)(St, t, e),
              i.i(r.d)(Ct, t, e),
              i.i(r.d)(Et, t, e),
              i.i(r.d)(At, t, e),
              i.i(r.d)(Bt, t, e),
              i.i(r.d)(Pt, t, e),
              i.i(r.d)(Wt, t, e),
              i.i(r.d)(qt, t, e),
              i.i(r.d)(Vt, t, e),
              i.i(r.d)(zt, t, e),
              i.i(r.d)(Kt, t, e),
              i.i(r.d)(Qt, t, e),
              i.i(r.d)(Xt, t, e),
              i.i(r.d)(te, t, e);
          },
          destroy: function(t) {
            t &&
              (i.i(r.e)(n),
              i.i(r.e)(o),
              i.i(r.e)(a),
              i.i(r.e)(N),
              i.i(r.e)(x),
              i.i(r.e)(O),
              i.i(r.e)(T),
              i.i(r.e)(E),
              i.i(r.e)(A),
              i.i(r.e)(H),
              i.i(r.e)(B),
              i.i(r.e)(D),
              i.i(r.e)(L),
              i.i(r.e)(V),
              i.i(r.e)(z),
              i.i(r.e)(U),
              i.i(r.e)(K),
              i.i(r.e)(Z),
              i.i(r.e)(J),
              i.i(r.e)(X),
              i.i(r.e)(tt),
              i.i(r.e)(et),
              i.i(r.e)(it),
              i.i(r.e)(ot),
              i.i(r.e)(rt),
              i.i(r.e)(lt),
              i.i(r.e)(dt),
              i.i(r.e)(ut),
              i.i(r.e)(ht),
              i.i(r.e)(pt),
              i.i(r.e)(bt),
              i.i(r.e)(kt),
              i.i(r.e)(Nt),
              i.i(r.e)(xt),
              i.i(r.e)(It),
              i.i(r.e)(Tt),
              i.i(r.e)(jt),
              i.i(r.e)(St),
              i.i(r.e)(Ct),
              i.i(r.e)(Et),
              i.i(r.e)(At),
              i.i(r.e)(Bt),
              i.i(r.e)(Pt),
              i.i(r.e)(Wt),
              i.i(r.e)(qt),
              i.i(r.e)(Vt),
              i.i(r.e)(zt),
              i.i(r.e)(Kt),
              i.i(r.e)(Qt),
              i.i(r.e)(Xt),
              i.i(r.e)(te));
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var r = i(0);
    i.i(r.f)(o.prototype, r.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(r.f)({}, e, t)),
          i.i(r.h)(this, this._observers.pre, t, e),
          i.i(r.h)(this, this._observers.post, t, e);
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = i.i(s.a)('nav'),
        r = i.i(s.a)('section');
      i.i(s.b)(r, n), (r.className = 'header-container');
      for (var a = t.views, c = [], l = 0; l < a.length; l += 1)
        (c[l] = o(t, a, a[l], l, e)), c[l].mount(r, null);
      return {
        mount: function(t, e) {
          i.i(s.d)(n, t, e);
        },
        update: function(t, n) {
          var a = n.views;
          if ('views' in t || 'active' in t) {
            for (var l = 0; l < a.length; l += 1)
              c[l]
                ? c[l].update(t, n, a, a[l], l)
                : ((c[l] = o(n, a, a[l], l, e)), c[l].mount(r, null));
            i.i(s.n)(c, !0, a.length), (c.length = a.length);
          }
        },
        destroy: function(t) {
          i.i(s.n)(c, !1, 0), t && i.i(s.e)(n);
        }
      };
    }
    function o(t, e, n, o, a) {
      var c,
        l,
        d,
        u,
        h = i.i(s.a)('button');
      i.i(s.c)(h, 'role', 'button'),
        (h.name = c = n.id),
        (h.className = l =
          'tabLink btn--nav ' + (t.active === n.id ? 'active' : '')),
        (h.id = d = n.id + '-button'),
        i.i(s.c)(h, 'href', '#'),
        i.i(s.j)(h, 'click', r),
        (h._svelte = { component: a, each_block_value: e, view_index: o });
      var f = i.i(s.i)((u = n.title));
      return (
        i.i(s.b)(f, h),
        {
          mount: function(t, e) {
            i.i(s.d)(h, t, e);
          },
          update: function(t, e, i, n, o) {
            c !== (c = n.id) && (h.name = c),
              l !==
                (l =
                  'tabLink btn--nav ' + (e.active === n.id ? 'active' : '')) &&
                (h.className = l),
              d !== (d = n.id + '-button') && (h.id = d),
              (h._svelte.each_block_value = i),
              (h._svelte.view_index = o),
              u !== (u = n.title) && (f.data = u);
          },
          destroy: function(t) {
            i.i(s.k)(h, 'click', r), t && i.i(s.e)(h);
          }
        }
      );
    }
    function r(t) {
      var e = this._svelte.component,
        i = this._svelte.each_block_value,
        n = this._svelte.view_index,
        o = i[n];
      e.fire('click', { view: o });
    }
    function a(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var s = i(0);
    i.i(s.f)(a.prototype, s.g),
      (a.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(s.f)({}, e, t)),
          i.i(s.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(s.h)(this, this._observers.post, t, e);
      }),
      (a.prototype.teardown = a.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = a);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n,
        r = i.i(a.a)('p'),
        s = i.i(a.i)((n = t.message));
      i.i(a.b)(s, r);
      var c = i.i(a.i)('\n'),
        l = i.i(a.a)('p'),
        d = t.showButton && o(t, e);
      return (
        d && d.mount(l, null),
        {
          mount: function(t, e) {
            i.i(a.d)(r, t, e), i.i(a.d)(c, t, e), i.i(a.d)(l, t, e);
          },
          update: function(t, i) {
            n !== (n = i.message) && (s.data = n),
              i.showButton
                ? d || ((d = o(i, e)), d.mount(l, null))
                : d && (d.destroy(!0), (d = null));
          },
          destroy: function(t) {
            d && d.destroy(!1), t && (i.i(a.e)(r), i.i(a.e)(c), i.i(a.e)(l));
          }
        }
      );
    }
    function o(t, e) {
      function n(t) {
        e.handleClick(t);
      }
      var o = i.i(a.a)('button');
      return (
        (o.type = 'button'),
        (o.className = 'btn btn--small'),
        i.i(a.j)(o, 'click', n),
        i.i(a.b)(
          i.i(a.i)(
            'Yes, I want to stop all my current instances of Copy Folder'
          ),
          o
        ),
        {
          mount: function(t, e) {
            i.i(a.d)(o, t, e);
          },
          destroy: function(t) {
            i.i(a.k)(o, 'click', n), t && i.i(a.e)(o);
          }
        }
      );
    }
    function r(t) {
      (t = t || {}),
        (this._state = i.i(a.f)(s.data(), t.data)),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var a = i(0),
      s = (function() {
        return {
          data: function() {
            return {
              message:
                'Are you sure you want to stop the instances of copy folder that you have running?',
              showButton: !0
            };
          },
          methods: {
            handleClick: function(t) {
              try {
                google.script.run.setStopFlag();
              } catch (t) {
                console.log(t);
              }
              this.set({
                message:
                  'You have stopped all folder copies. To restart them, please use the "Resume" feature.',
                showButton: !1
              });
            }
          }
        };
      })();
    i.i(a.f)(r.prototype, s.methods, a.g),
      (r.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(a.f)({}, e, t)),
          i.i(a.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(a.h)(this, this._observers.post, t, e);
      }),
      (r.prototype.teardown = r.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = r);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      function n(t) {
        e.handleSubmit(t);
      }
      var o = i.i(s.a)('div');
      o.id = 'resume-validation-errors';
      var c = i.i(s.i)('\n\n'),
        l = i.i(s.a)('div');
      (l.id = 'resume-form-div'), (l.className = 'form-div');
      var d = i.i(s.a)('form');
      i.i(s.b)(d, l),
        (d.id = 'resumeForm'),
        (d.name = 'resumeForm'),
        (d.className = 'form-horizontal'),
        i.i(s.j)(d, 'submit', n);
      var u = new r.a({
        target: d,
        _root: e._root,
        data: { selectText: t.selectText }
      });
      i.i(s.b)(i.i(s.i)(' \n        '), d);
      var h = i.i(s.a)('br');
      i.i(s.b)(h, d), i.i(s.b)(i.i(s.i)('\n\n        \n        '), d);
      var f = new a.a({
        target: d,
        _root: e._root,
        data: { buttonText: t.buttonText }
      });
      return (
        f.on('click', function(t) {
          e.handleClick(t);
        }),
        {
          mount: function(t, e) {
            i.i(s.d)(o, t, e), i.i(s.d)(c, t, e), i.i(s.d)(l, t, e);
          },
          update: function(t, e) {
            var i = {};
            'selectText' in t && (i.selectText = e.selectText),
              Object.keys(i).length && u.set(i);
            var n = {};
            'buttonText' in t && (n.buttonText = e.buttonText),
              Object.keys(n).length && f.set(n);
          },
          destroy: function(t) {
            i.i(s.k)(d, 'submit', n),
              u.destroy(!1),
              f.destroy(!1),
              t && (i.i(s.e)(o), i.i(s.e)(c), i.i(s.e)(l));
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = i.i(s.f)(c.data(), t.data)),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._renderHooks = []),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null),
        this._flush();
    }
    var r = i(2),
      a = i(3),
      s = i(0),
      c = (function() {
        return {
          data: function() {
            return {
              buttonText: 'Resume copying',
              selectText: 'Select the folder copy that is in progress'
            };
          },
          methods: { handleClick: function(t) {}, handleSubmit: function(t) {} }
        };
      })();
    i.i(s.f)(o.prototype, c.methods, s.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(s.f)({}, e, t)),
          i.i(s.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(s.h)(this, this._observers.post, t, e),
          this._flush();
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      function n(t) {
        e.handleSubmit(t);
      }
      var o = i.i(c.a)('div');
      o.id = 'start-validation-errors';
      var l = i.i(c.i)('\n\n\n'),
        d = i.i(c.a)('div');
      (d.id = 'formDiv'), (d.className = 'form-div');
      var u = i.i(c.a)('form');
      i.i(c.b)(u, d),
        (u.id = 'folderForm'),
        (u.name = 'folderForm'),
        i.i(c.j)(u, 'submit', n);
      var h = new a.a({
        target: u,
        _root: e._root,
        data: { selectText: t.selectText }
      });
      i.i(c.b)(i.i(c.i)('\n        \n        '), u);
      var f = i.i(c.a)('br');
      i.i(c.b)(f, u), i.i(c.b)(i.i(c.i)('\n\n\n        \n        '), u);
      var p = i.i(c.a)('label');
      i.i(c.b)(p, u), (p.className = 'textfield'), (p.htmlFor = 'newFolder');
      var b = i.i(c.a)('input');
      i.i(c.b)(b, p),
        (b.type = 'text'),
        (b.id = 'newFolder'),
        (b.name = 'newFolder'),
        i.i(c.b)(i.i(c.i)('\n            '), p);
      var v = i.i(c.a)('span');
      i.i(c.b)(v, p),
        (v.className = 'textfield__label'),
        i.i(c.b)(i.i(c.i)('New folder name'), v),
        i.i(c.b)(
          i.i(c.i)(
            '\n\n\n\n        \n        Copy sharing permissions\n        '
          ),
          u
        );
      var m = i.i(c.a)('span');
      i.i(c.b)(m, u),
        (m.tabIndex = '10'),
        (m.className = 'tooltip-toggle'),
        i.i(c.c)(
          m,
          'data-tooltip',
          "Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if 'Yes' is selected."
        );
      var _ = new r.a({ target: m, _root: e._root });
      i.i(c.b)(i.i(c.i)(' \n        \n        \n        '), u);
      var g = i.i(c.a)('div');
      i.i(c.b)(g, u),
        (g.className = 'form-group'),
        (g.id = 'permissions-group');
      var y = i.i(c.a)('label');
      i.i(c.b)(y, g), (y.className = 'radio');
      var w = i.i(c.a)('input');
      i.i(c.b)(w, y),
        (w.type = 'radio'),
        (w.name = 'permissions'),
        (w.__value = 'no'),
        (w.value = w.__value),
        (w.checked = !0),
        i.i(c.b)(i.i(c.i)('\n                '), y);
      var k = i.i(c.a)('span');
      i.i(c.b)(k, y),
        (k.className = 'radio__label'),
        i.i(c.b)(i.i(c.i)('No'), k),
        i.i(c.b)(i.i(c.i)('\n            '), g);
      var N = i.i(c.a)('label');
      i.i(c.b)(N, g), (N.className = 'radio');
      var x = i.i(c.a)('input');
      i.i(c.b)(x, N),
        (x.type = 'radio'),
        (x.name = 'permissions'),
        (x.__value = 'yes'),
        (x.value = x.__value),
        i.i(c.b)(i.i(c.i)('\n                '), N);
      var I = i.i(c.a)('span');
      i.i(c.b)(I, N),
        (I.className = 'radio__label'),
        i.i(c.b)(i.i(c.i)('Yes'), I),
        i.i(c.b)(
          i.i(c.i)('\n\n\n\n        \n        Copy folder to\n        '),
          u
        );
      var O = i.i(c.a)('div');
      i.i(c.b)(O, u),
        (O.className = 'form-group'),
        (O.id = 'destination-group');
      var T = i.i(c.a)('label');
      i.i(c.b)(T, O), (T.className = 'radio');
      var j = i.i(c.a)('input');
      i.i(c.b)(j, T),
        (j.type = 'radio'),
        (j.name = 'copyLocationOptions'),
        (j.__value = 'same'),
        (j.value = j.__value),
        (j.checked = !0),
        i.i(c.b)(i.i(c.i)('\n                '), T);
      var F = i.i(c.a)('span');
      i.i(c.b)(F, T),
        (F.className = 'radio__label'),
        i.i(c.b)(i.i(c.i)('Same as source folder'), F),
        i.i(c.b)(i.i(c.i)('\n            '), O);
      var S = i.i(c.a)('label');
      i.i(c.b)(S, O), (S.className = 'radio');
      var C = i.i(c.a)('input');
      i.i(c.b)(C, S),
        (C.type = 'radio'),
        (C.name = 'copyLocationOptions'),
        (C.__value = 'root'),
        (C.value = C.__value),
        i.i(c.b)(i.i(c.i)('\n                '), S);
      var E = i.i(c.a)('span');
      i.i(c.b)(E, S),
        (E.className = 'radio__label'),
        i.i(c.b)(i.i(c.i)('Root directory (i.e. at the top of "My Drive")'), E),
        i.i(c.b)(i.i(c.i)('\n\n\n        \n        '), u);
      var A = new s.a({
        target: u,
        _root: e._root,
        data: { buttonText: t.buttonText }
      });
      return (
        A.on('click', function(t) {
          e.handleClick(t);
        }),
        {
          mount: function(t, e) {
            i.i(c.d)(o, t, e), i.i(c.d)(l, t, e), i.i(c.d)(d, t, e);
          },
          update: function(t, e) {
            var i = {};
            'selectText' in t && (i.selectText = e.selectText),
              Object.keys(i).length && h.set(i);
            var n = {};
            'buttonText' in t && (n.buttonText = e.buttonText),
              Object.keys(n).length && A.set(n);
          },
          destroy: function(t) {
            i.i(c.k)(u, 'submit', n),
              h.destroy(!1),
              _.destroy(!1),
              A.destroy(!1),
              t && (i.i(c.e)(o), i.i(c.e)(l), i.i(c.e)(d));
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = i.i(c.f)(l.data(), t.data)),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._renderHooks = []),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null),
        this._flush();
    }
    var r = i(14),
      a = i(2),
      s = i(3),
      c = i(0),
      l = (function() {
        return {
          data: function() {
            return { buttonText: 'Copy Folder', selectText: 'Folder to copy' };
          },
          methods: { handleClick: function(t) {}, handleSubmit: function(t) {} }
        };
      })();
    i.i(c.f)(o.prototype, l.methods, c.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(c.f)({}, e, t)),
          i.i(c.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(c.h)(this, this._observers.post, t, e),
          this._flush();
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = i.i(a.a)('div');
      (n.className = 'container'), (n.id = 'container');
      for (var r = t.views, s = [], c = 0; c < r.length; c += 1)
        (s[c] = o(t, r, r[c], c, e)), s[c].mount(n, null);
      return {
        mount: function(t, e) {
          i.i(a.d)(n, t, e);
        },
        update: function(t, r) {
          var c = r.views;
          if ('views' in t || 'active' in t) {
            for (var l = 0; l < c.length; l += 1)
              s[l]
                ? s[l].update(t, r, c, c[l], l)
                : ((s[l] = o(r, c, c[l], l, e)), s[l].mount(n, null));
            i.i(a.n)(s, !0, c.length), (s.length = c.length);
          }
        },
        destroy: function(t) {
          i.i(a.n)(s, !1, 0), t && i.i(a.e)(n);
        }
      };
    }
    function o(t, e, n, o, r) {
      var s,
        c,
        l = i.i(a.a)('div');
      return (
        (l.id = s = n.id),
        (l.className = c = 'tab ' + (t.active === n.id ? 'active' : '')),
        {
          mount: function(t, e) {
            i.i(a.d)(l, t, e);
          },
          update: function(t, e, i, n, o) {
            s !== (s = n.id) && (l.id = s),
              c !== (c = 'tab ' + (e.active === n.id ? 'active' : '')) &&
                (l.className = c);
          },
          destroy: function(t) {
            t && i.i(a.e)(l);
          }
        }
      );
    }
    function r(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null),
        t._root
          ? t._root._renderHooks.push(s.oncreate.bind(this))
          : s.oncreate.call(this);
    }
    var a = i(0),
      s = (function() {
        return {
          oncreate: function() {
            this.get('views').forEach(function(t) {
              new t.component({ target: document.getElementById(t.id) });
            });
          }
        };
      })();
    i.i(a.f)(r.prototype, a.g),
      (r.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(a.f)({}, e, t)),
          i.i(a.h)(this, this._observers.pre, t, e),
          this._fragment.update(t, this._state),
          i.i(a.h)(this, this._observers.post, t, e);
      }),
      (r.prototype.teardown = r.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = r);
  },
  function(t, e, i) {
    'use strict';
    function n(t, e) {
      var n = i.i(r.l)('svg');
      i.i(r.c)(n, 'xmlns', 'http://www.w3.org/2000/svg'),
        i.i(r.c)(n, 'viewBox', '0 0 24 24');
      var o = i.i(r.l)('path');
      return (
        i.i(r.b)(o, n),
        i.i(r.c)(
          o,
          'd',
          'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z'
        ),
        {
          mount: function(t, e) {
            i.i(r.d)(n, t, e);
          },
          destroy: function(t) {
            t && i.i(r.e)(n);
          }
        }
      );
    }
    function o(t) {
      (t = t || {}),
        (this._state = t.data || {}),
        (this._observers = {
          pre: Object.create(null),
          post: Object.create(null)
        }),
        (this._handlers = Object.create(null)),
        (this._root = t._root || this),
        (this._yield = t._yield),
        (this._torndown = !1),
        (this._fragment = n(this._state, this)),
        t.target && this._fragment.mount(t.target, null);
    }
    var r = i(0);
    i.i(r.f)(o.prototype, r.g),
      (o.prototype._set = function(t) {
        var e = this._state;
        (this._state = i.i(r.f)({}, e, t)),
          i.i(r.h)(this, this._observers.pre, t, e),
          i.i(r.h)(this, this._observers.post, t, e);
      }),
      (o.prototype.teardown = o.prototype.destroy = function(t) {
        this.fire('destroy'),
          this._fragment.destroy(!1 !== t),
          (this._fragment = null),
          (this._state = {}),
          (this._torndown = !0);
      }),
      (e.a = o);
  },
  function(t, e) {
    t.exports = {
      folderIsSelected: function(t) {
        $('.getFolderErrors').text(''),
          $('#newFolder').val(t.destName),
          $('.folderName').text(t.srcName),
          $('.folderSelect').hide(),
          $('.folderLookup').hide(),
          $('.selectedFolderInfo').show();
      },
      onFolderLookup: function() {
        $('.folderLookup').show(), $('.folderSelect').hide();
      },
      onValid: function() {
        $('#errors').html(''),
          $('#start-validation-errors').html(''),
          $('#resume-validation-errors').html('');
      },
      resetForm: function() {
        $('.folderSelect').show(),
          $('.selectedFolderInfo').hide(),
          $('.getFolderErrors').hide();
      },
      showProcessingOverlay: function(t) {
        var e = document.querySelector('.overlay'),
          i = document.querySelector('.overlay__message');
        (e.style.display = 'block'), (i.innerText = t);
      },
      clearProcessingOverlay: function() {
        var t = document.querySelector('.overlay'),
          e = document.querySelector('.overlay__message');
        (t.style.display = 'none'), (e.innerText = '');
      },
      hideStep1: function(t) {
        var e = t ? 'resume-step1' : 'start-step1';
        document.getElementById(e).style.display = 'none';
      },
      showStep2: function(t, e) {
        if (null === t || void 0 === t)
          return void (document.getElementById('start-' + e).style.display =
            'block');
        var i = t ? 'resume' : 'start';
        (i += '-' + e), (document.getElementById(i).style.display = 'block');
      },
      showTooManyTriggers: function() {
        $('.too-many-triggers').show();
      },
      hideTooManyTriggers: function() {
        $('.too-many-triggers').hide();
      },
      showErrors: function() {
        $('.errors').show();
      },
      hideErrors: function() {
        $('.errors').hide();
      },
      showPauseStep2: function() {
        (document.getElementById('pause-step1').style.display = 'none'),
          (document.getElementById('pause-step2').style.display = 'block');
      }
    };
  },
  function(t, e) {
    t.exports = function(t) {
      var e,
        i,
        n = t.search('id='),
        o = t.search('folders');
      return (
        (e = n > 0 ? t.slice(n + 3) : o > 0 ? t.slice(o + 8) : t),
        (i = e.indexOf('&')),
        i > 0 && (e = e.slice(0, i)),
        e
      );
    };
  },
  function(t, e, i) {
    function n() {
      gapi.load('picker', {
        callback: function() {
          u = !0;
        }
      }),
        google.script.run
          .withSuccessHandler(o)
          .withFailureHandler(s)
          .getOAuthToken();
    }
    function o(t) {
      if (u && t) {
        var e = new google.picker.DocsView()
          .setIncludeFolders(!0)
          .setMimeTypes('application/vnd.google-apps.folder')
          .setSelectFolderEnabled(!0);
        l = new google.picker.PickerBuilder()
          .addView(e)
          .hideTitleBar()
          .setOAuthToken(t)
          .setMaxItems(1)
          .setCallback(r)
          .setTitle('Select a folder to copy')
          .setOrigin('https://script.google.com')
          .build();
      }
    }
    function r(t) {
      var e = t[google.picker.Response.ACTION];
      if (e == google.picker.Action.PICKED) {
        var i = t[google.picker.Response.DOCUMENTS][0];
        a({
          srcId: i[google.picker.Document.ID],
          srcParentId: i[google.picker.Document.PARENT_ID],
          srcName: i[google.picker.Document.NAME],
          destName: 'Copy of ' + i[google.picker.Document.NAME]
        });
      } else e == google.picker.Action.CANCEL && google.script.host.close();
    }
    function a(t) {
      (d.srcId = t.srcId),
        (d.srcParentId = t.srcParentId),
        (d.srcName = t.srcName),
        (d.destName = t.destName),
        c.folderIsSelected(d);
    }
    function s() {
      $('#getFolderErrors').text(
        'Error getting OAuth token for Google Picker.  Please manually input folder URL'
      );
    }
    var c = i(15);
    !(function(t, e) {
      var i = document.createElement('script'),
        n = document.getElementsByTagName('script')[0];
      (i.async = 1),
        n.parentNode.insertBefore(i, n),
        (i.onload = i.onreadystatechange = function(t, n) {
          (n || !i.readyState || /loaded|complete/.test(i.readyState)) &&
            ((i.onload = i.onreadystatechange = null),
            (i = void 0),
            n || (e && e()));
        }),
        (i.src = t);
    })('https://apis.google.com/js/api.js', n);
    var l,
      d = {},
      u = !1;
    (e.folder = d),
      (e.showPicker = function() {
        return l.setVisible(!0);
      }),
      (e.setSelectedFolder = a);
  },
  function(t, e, i) {
    t.exports = i(4);
  }
]);
