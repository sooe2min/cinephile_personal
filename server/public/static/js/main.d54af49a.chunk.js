;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
	[0],
	{
		104: function (e, t, n) {},
		109: function (e, t, n) {},
		133: function (e, t, n) {},
		237: function (e, t, n) {},
		238: function (e, t, n) {
			'use strict'
			n.r(t)
			var s = n(0),
				i = n(1),
				a = n.n(i),
				c = n(29),
				r = n.n(c),
				o = (n(104), n(9)),
				l = (n(25), n(6)),
				u = n(7),
				d = (n(109), n(61)),
				j = n(59),
				m = function (e) {
					var t = e.defaultUserInfo,
						n = e.signInAjax,
						a = e.autoCookieLogin,
						c = (e.userInfo, e.signOutAjax),
						r = e.toggleSwitch,
						l = e.signUpSwitch,
						u = e.loginSwitch,
						m = e.toggle,
						p = e.loginModal,
						b = e.signUpModal,
						f = function () {
							return r
								? {
										transform: 'translateX(0px)',
										width: '22%',
										transition: 'all 2.5s',
										opacity: 0.4,
										marginLeft: '-25px'
								  }
								: {
										transform: 'translateX(-500px)',
										width: '0%',
										opacity: 0,
										transition: 'all 2s',
										color: 'white'
								  }
						},
						g = document.cookie.split('; ').some(function (e) {
							return e.includes('token') || e.includes('cookie')
						}),
						h = JSON.parse(sessionStorage.getItem('userInfo'))
					return (
						Object(i.useEffect)(
							function () {
								if (!g)
									return function () {
										a(null)
									}
								var e = document.cookie.split('; ').filter(function (e) {
									return 'user' === e.slice(0, 4)
								})[0]
								console.log(e, '!!!!!!!!!!!!!'),
									e && n(e.split('=')),
									a(JSON.parse(sessionStorage.getItem('userInfo'))),
									t(JSON.parse(sessionStorage.getItem('userInfo')))
							},
							[a, g, t, n]
						),
						Object(s.jsxs)(s.Fragment, {
							children: [
								Object(s.jsx)('div', {
									className: 'sideBarToggle',
									onClick: m,
									children: '\u2261'
								}),
								h
									? Object(s.jsx)('div', {
											className: 'sideBar',
											style: f(),
											children: Object(s.jsxs)('ul', {
												children: [
													Object(s.jsx)(j.a, {
														icon: d.a,
														className: 'userIcon'
													}),
													Object(s.jsxs)('span', {
														className: 'nickName',
														children: [' ', h.nickname, ' \ub2d8']
													}),
													Object(s.jsx)(o.b, {
														to: '/userInfo',
														className: 'sideBarList',
														id: 'firstLi',
														children: 'My Info'
													}),
													Object(s.jsx)(o.b, {
														className: 'sideBarList',
														to: '/board',
														children: 'Board'
													}),
													Object(s.jsx)('li', {
														className: 'sideBarList',
														onClick: function () {
															c(),
																(window.location.href =
																	'http://localhost:3000/')
														},
														children: 'LogOut'
													})
												]
											})
									  })
									: Object(s.jsx)('div', {
											className: 'sideBar',
											style: f(),
											children: Object(s.jsxs)('ul', {
												children: [
													Object(s.jsx)(j.a, {
														icon: d.a,
														className: 'userIcon'
													}),
													Object(s.jsx)('span', {
														className: 'nickName',
														children:
															'\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694.'
													}),
													Object(s.jsx)('li', {
														className: 'sideBarList',
														onClick: function () {
															return !l && !1 === u && p()
														},
														children: '\ub85c\uadf8\uc778'
													}),
													Object(s.jsx)('li', {
														className: 'sideBarList',
														onClick: function () {
															return !u && !1 === l && b()
														},
														children: '\ud68c\uc6d0\uac00\uc785'
													}),
													Object(s.jsx)(o.b, {
														className: 'sideBarList',
														to: '/board',
														children: 'Board'
													})
												]
											})
									  })
							]
						})
					)
				},
				p = 'SIDEBAR',
				b = 'LOGIN',
				f = 'SIGNUP'
			function g() {
				return { type: b }
			}
			var h = { toggleSwitch: !0, loginSwitch: !1, signUpSwitch: !1 },
				O = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: h,
						t = arguments.length > 1 ? arguments[1] : void 0
					switch (t.type) {
						case p:
							return Object.assign({}, e, {
								toggleSwitch: !e.toggleSwitch
							})
						case b:
							return Object.assign({}, e, { loginSwitch: !e.loginSwitch })
						case f:
							return Object.assign({}, e, {
								signUpSwitch: !e.signUpSwitch
							})
						default:
							return e
					}
				},
				x = n(5),
				v = n.n(x),
				y = n(8),
				I = n(4),
				S = n.n(I)
			S.a.defaults.withCredentials = !0
			var N = 'LOGIN_EMAIL',
				w = 'LOGIN_PASSWORD',
				U = 'COOKIE_LOGIN',
				k = 'SIGNIN_POST_PENDING',
				C = 'SIGNIN_POST_SUCCESS',
				E = 'SIGNIN_POST_FAILURE',
				_ = 'LOGOUT',
				M = function (e) {
					return { type: U, userInfo: e }
				},
				L = (function () {
					var e = Object(y.a)(
						v.a.mark(function e(t) {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (
												(console.log(t, '111111111111111'),
												!Array.isArray(t))
											) {
												e.next = 6
												break
											}
											return (
												console.log(t, '222222222222222'),
												(e.next = 5),
												S.a.post(
													'http://localhost:3000/',
													Object.assign({}, { user: t[1] })
												)
											)
										case 5:
											return e.abrupt('return', e.sent)
										case 6:
											return (
												(e.next = 8),
												S.a.post('http://localhost:3000/users/login', t)
											)
										case 8:
											return e.abrupt('return', e.sent)
										case 9:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function (t) {
						return e.apply(this, arguments)
					}
				})(),
				B = (function () {
					var e = Object(y.a)(
						v.a.mark(function e() {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												S.a.post('http://localhost:3000/users/logout')
											)
										case 2:
											return e.abrupt('return', e.sent)
										case 3:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function () {
						return e.apply(this, arguments)
					}
				})(),
				P = {
					loginEmail: '',
					loginPassword: '',
					pending: !1,
					error: !1,
					userInfo: null
				},
				A = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: P,
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = t.loginEmail,
						s = t.loginPassword,
						i = t.userInfo,
						a = t.error
					switch (t.type) {
						case N:
							return Object.assign({}, e, { loginEmail: n })
						case w:
							return Object.assign({}, e, { loginPassword: s })
						case U:
							return Object.assign({}, e, { userInfo: i })
						case k:
							return Object.assign({}, e, { pending: !0, error: !1 })
						case C:
							return Object.assign({}, e, { pending: !1, userInfo: i })
						case E:
							return Object.assign({}, e, { pending: !1, error: a })
						case _:
							return Object.assign({}, e, { error: a, userInfo: i })
						default:
							return e
					}
				}
			S.a.defaults.withCredentials = !0
			var T = 'SIGNUP_EMAIL',
				G = 'SIGNUP_PASSWORD',
				D = 'SIGNUP_USERNAME',
				F = 'SIGNUP_SEX',
				R = 'SIGNUP_AGE',
				q = 'SIGNUP_POST_PENDING',
				Y = 'SIGNUP_POST_SUCCESS',
				J = 'SIGNUP_POST_FAILURE',
				V = (function () {
					var e = Object(y.a)(
						v.a.mark(function e(t) {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												S.a.post('http://localhost:3000/users/signup', t)
											)
										case 2:
											return e.abrupt('return', e.sent)
										case 3:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function (t) {
						return e.apply(this, arguments)
					}
				})(),
				W = {
					signUpEmail: '',
					signUpPassword: '',
					signUpUsername: '',
					signUpSex: '\uc131\ubcc4',
					signUpAge: '\ub098\uc774',
					pending: !1,
					error: !1
				},
				H = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: W,
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = t.signUpEmail,
						s = t.signUpPassword,
						i = t.signUpUsername,
						a = t.signUpSex,
						c = t.signUpAge,
						r = t.result,
						o = t.error
					switch (t.type) {
						case T:
							return Object.assign({}, e, { signUpEmail: n })
						case G:
							return Object.assign({}, e, { signUpPassword: s })
						case D:
							return Object.assign({}, e, { signUpUsername: i })
						case F:
							return Object.assign({}, e, { signUpSex: a })
						case R:
							return Object.assign({}, e, { signUpAge: c })
						case q:
							return Object.assign({}, e, { pending: !0, error: !1 })
						case Y:
							return Object.assign({}, e, { pending: !1, result: r })
						case J:
							return Object.assign({}, e, { pending: !1, error: o })
						default:
							return e
					}
				}
			S.a.defaults.withCredentials = !0
			var X = 'MODIFY_NICKNAME',
				z = 'MODIFY_EMAIL',
				K = 'MODIFY_PASSWORD',
				Q = 'MODIFY_GENDER',
				Z = 'MODIFY_AGE',
				$ = 'DEFAULT_USERINFO',
				ee = 'MODIFY_POST_PENDING',
				te = 'MODIFY_POST_SUCCESS',
				ne = 'MODIFY_POST_FAILURE'
			var se = (function () {
					var e = Object(y.a)(
						v.a.mark(function e(t) {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												S.a.post(
													'http://localhost:3000/setting/userinfo',
													t
												)
											)
										case 2:
											return e.abrupt('return', e.sent)
										case 3:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function (t) {
						return e.apply(this, arguments)
					}
				})(),
				ie = {
					nickname: '',
					password: '',
					email: '',
					age: '',
					gender: '',
					modifyUserInfo: null,
					error: !1,
					pending: !0
				},
				ae = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: ie,
						t = arguments.length > 1 ? arguments[1] : void 0
					return (function () {
						var n = t.nickname,
							s = t.password,
							i = t.email,
							a = t.result,
							c = t.gender,
							r = t.age,
							o = t.modifyUserInfo,
							l = t.error
						switch (t.type) {
							case $:
								return Object.assign({}, e, { modifyUserInfo: o })
							case X:
								return Object.assign({}, e, { nickname: n })
							case z:
								return Object.assign({}, e, { email: i })
							case K:
								return Object.assign({}, e, { password: s })
							case Q:
								return Object.assign({}, e, { gender: c })
							case Z:
								return Object.assign({}, e, { age: r })
							case ee:
								return Object.assign({}, e, { pending: !0, error: !1 })
							case te:
								return Object.assign({}, e, {
									result: a,
									pending: !1,
									error: !1
								})
							case ne:
								return Object.assign({}, e, { error: l, pending: !1 })
							default:
								return e
						}
					})()
				}
			n(130).config()
			var ce = function (e) {
					var t = e.signInAjax,
						n = e.loginSwitch,
						i = e.modalSwitch,
						a = e.loginModal,
						c = e.loginPassword,
						r = e.loginEmail,
						o = e.loginEmailInput,
						l = e.loginPasswordInput
					return Object(s.jsxs)('div', {
						className: 'modal',
						style: i(n),
						children: [
							Object(s.jsx)('div', {
								className: 'modalExit',
								onClick: function () {
									a()
								},
								children: 'X'
							}),
							Object(s.jsxs)('form', {
								onSubmit: function (e) {
									return (function (e) {
										e.preventDefault(),
											r.length < 1
												? alert('email')
												: c.length < 1
												? alert('password')
												: (t({ email: r, password: c }),
												  a(),
												  console.log('email:', r),
												  console.log('password: ', c))
									})(e)
								},
								children: [
									Object(s.jsx)('input', {
										className: 'sideBarInput',
										required: 'required',
										value: r,
										type: 'email',
										placeholder: 'email',
										onChange: function (e) {
											o(e.target.value)
										}
									}),
									Object(s.jsx)('input', {
										className: 'sideBarInput',
										required: 'required',
										value: c,
										type: 'password',
										placeholder: 'password',
										onChange: function (e) {
											l(e.target.value)
										}
									}),
									Object(s.jsx)('button', {
										className: 'sideBarButton',
										type: 'submit',
										children: 'SignIn'
									})
								]
							}),
							Object(s.jsx)('button', {
								className: 'sideBarButton',
								children: Object(s.jsx)('a', {
									className: 'sotialLoginButton',
									href: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id='
										.concat(
											'5af789a571f2714d721c787e5a796ad0',
											'&redirect_uri='
										)
										.concat('http://localhost:3000/users/kakao'),
									children: '\uce74\uce74\uc624\ud1a1 \ub85c\uadf8\uc778'
								})
							}),
							Object(s.jsx)('button', {
								className: 'sideBarButton',
								children: Object(s.jsx)('a', {
									className: 'sotialLoginButton',
									href: 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id='
										.concat('Y_LrBu8baSORi3c5DdFM', '&redirect_uri=')
										.concat(
											'http://localhost:3000/users/naver',
											'&state=test'
										),
									children: '\ub124\uc774\ubc84 \ub85c\uadf8\uc778'
								})
							}),
							Object(s.jsx)('button', {
								className: 'sideBarButton',
								children: Object(s.jsx)('a', {
									className: 'sotialLoginButton',
									href: 'https://www.facebook.com/v9.0/dialog/oauth?client_id='
										.concat('871172790317447', '&redirect_uri=')
										.concat(
											'http://localhost:3000/users/facebook',
											'&state=test'
										),
									children: '\ud398\uc774\uc2a4\ubd81 \ub85c\uadf8\uc778'
								})
							}),
							Object(s.jsx)('button', {
								className: 'sideBarButton',
								children: Object(s.jsx)('a', {
									className: 'sotialLoginButton',
									href: 'http://localhost:3000/users/kakao/unlink',
									children: '\uc5f0\uacb0 \ub04a\uae30'
								})
							})
						]
					})
				},
				re = function (e) {
					var t = e.signUpSwitch,
						n = e.modalSwitch,
						i = e.signUpSex,
						a = e.signUpAge,
						c = e.signUpAgeSelect,
						r = e.signUpSexSelect,
						o = e.signUpPasswordInput,
						l = e.signUpEmailInput,
						u = e.signUpUsernameInput,
						d = e.signUpModal,
						j = e.signUpUsername,
						m = e.signUpPassword,
						p = e.signUpEmail,
						b = e.signUpAjax,
						f = function () {
							o(''), l(''), u(''), c('10'), r('male'), d()
						}
					return Object(s.jsxs)('div', {
						className: 'modal',
						style: n(t),
						children: [
							Object(s.jsx)('div', {
								className: 'modalExit',
								onClick: f,
								children: 'X'
							}),
							Object(s.jsxs)('form', {
								onSubmit: function (e) {
									return (function (e) {
										e.preventDefault(),
											p.length < 12
												? alert('email')
												: m.length < 8
												? alert('password')
												: j.length < 6
												? alert('username')
												: '\uc131\ubcc4' === i
												? alert('\uc131\ubcc4')
												: '\ub098\uc774' === a
												? alert('\ub098\uc774')
												: (b({
														email: p,
														password: m,
														nickname: j,
														gender: i,
														age: a
												  }),
												  f())
									})(e)
								},
								children: [
									Object(s.jsx)('input', {
										required: 'required',
										className: 'sideBarInput',
										value: p,
										type: 'email',
										placeholder: 'email',
										onChange: function (e) {
											l(e.target.value)
										}
									}),
									Object(s.jsx)('input', {
										required: 'required',
										className: 'sideBarInput',
										value: m,
										type: 'password',
										placeholder: 'password',
										onChange: function (e) {
											o(e.target.value)
										}
									}),
									Object(s.jsx)('input', {
										required: 'required',
										className: 'sideBarInput',
										value: j,
										type: 'username',
										placeholder: 'username',
										onChange: function (e) {
											u(e.target.value)
										}
									}),
									Object(s.jsxs)('select', {
										className: 'sidiBarSelect',
										defaultValue: 'DEFAULT',
										onChange: function (e) {
											return r(e.target.value)
										},
										children: [
											Object(s.jsx)('option', {
												value: 'DEFAULT',
												children: '\uc131\ubcc4'
											}),
											Object(s.jsx)('option', {
												value: 'male',
												children: '\ub0a8\uc131'
											}),
											Object(s.jsx)('option', {
												value: 'famale',
												children: '\uc5ec\uc131'
											})
										]
									}),
									Object(s.jsxs)('select', {
										className: 'sidiBarSelect age',
										defaultValue: 'DEFAULT',
										onChange: function (e) {
											return c(e.target.value)
										},
										children: [
											Object(s.jsx)('option', {
												value: 'DEFAULT',
												children: '\ub098\uc774'
											}),
											[10, 20, 30, 40, 50, 60].map(function (e, t) {
												return Object(s.jsxs)(
													'option',
													{ value: e, children: [e, '\ub300'] },
													t
												)
											})
										]
									}),
									Object(s.jsx)('button', {
										className: 'sideBarButton signUpButton',
										children: 'SignUp'
									})
								]
							})
						]
					})
				},
				oe = function () {
					var e = Object(u.c)(function (e) {
							return {
								toggleSwitch: e.SideBar.toggleSwitch,
								loginSwitch: e.SideBar.loginSwitch,
								signUpSwitch: e.SideBar.signUpSwitch,
								loginEmail: e.SignIn.loginEmail,
								userInfo: e.SignIn.userInfo,
								loginPassword: e.SignIn.loginPassword,
								signUpPassword: e.SignUp.signUpPassword,
								signUpEmail: e.SignUp.signUpEmail,
								signUpUsername: e.SignUp.signUpUsername,
								signUpSex: e.SignUp.signUpSex,
								signUpAge: e.SignUp.signUpAge
							}
						}),
						t = e.toggleSwitch,
						n = e.signUpSex,
						a = e.userInfo,
						c = e.loginSwitch,
						r = e.signUpSwitch,
						o = e.loginEmail,
						l = e.loginPassword,
						d = e.signUpUsername,
						j = e.signUpPassword,
						b = e.signUpEmail,
						h = e.signUpAge,
						O = function (e) {
							return e ? { display: 'block' } : { display: 'none' }
						},
						x = Object(u.b)(),
						v = Object(i.useCallback)(
							function () {
								x({ type: p })
							},
							[x]
						),
						y = Object(i.useCallback)(
							function () {
								x(g())
							},
							[x]
						),
						I = Object(i.useCallback)(
							function () {
								x({ type: f })
							},
							[x]
						),
						S = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: N, loginEmail: e }
									})(e)
								)
							},
							[x]
						),
						U = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: w, loginPassword: e }
									})(e)
								)
							},
							[x]
						),
						P = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: G, signUpPassword: e }
									})(e)
								)
							},
							[x]
						),
						A = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: D, signUpUsername: e }
									})(e)
								)
							},
							[x]
						),
						W = Object(i.useCallback)(
							function (e) {
								x(M(e))
							},
							[x]
						),
						H = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: T, signUpEmail: e }
									})(e)
								)
							},
							[x]
						),
						X = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: F, signUpSex: e }
									})(e)
								)
							},
							[x]
						),
						z = Object(i.useCallback)(
							function (e) {
								x(
									(function (e) {
										return { type: R, signUpAge: e }
									})(e)
								)
							},
							[x]
						),
						K = Object(i.useCallback)(
							function (e) {
								var t
								x(
									((t = e),
									function (e) {
										e({ type: q }),
											V(t)
												.then(function (t) {
													e({ type: Y, result: t.data }),
														alert('\ud68c\uc6d0\uac00\uc785 \uc644\ub8cc')
												})
												.catch(function (t) {
													alert('\ud68c\uc6d0\uac00\uc785 \uc2e4\ud328'),
														e({ type: J, error: t })
												})
									})
								)
							},
							[x]
						),
						Q = Object(i.useCallback)(
							function (e) {
								var t
								x(
									((t = e),
									function (e) {
										e({ type: k }),
											L(t)
												.then(function (t) {
													console.log(t),
														sessionStorage.setItem(
															'userInfo',
															JSON.stringify(t.data)
														),
														e({ type: C, userInfo: t.data })
												})
												.catch(function (t) {
													e({ type: E, error: t })
												})
									})
								)
							},
							[x]
						),
						Z = Object(i.useCallback)(
							function (e) {
								x(function (e) {
									B()
										.then(function (t) {
											sessionStorage.clear(),
												(document.cookie =
													'cookie=; expires=Thu, 25 Oct 1990 00:00:00 GMT;'),
												(document.cookie =
													'token=; expires=Thu, 25 Oct 1990 00:00:10 GMT;'),
												e({ type: _, userInfo: null })
										})
										.catch(function (t) {
											e({ type: _, error: t }),
												alert('\ub85c\uadf8\uc544\uc6c3 \uc2e4\ud328')
										})
								})
							},
							[x]
						),
						ee = Object(i.useCallback)(
							function (e) {
								x({ type: $, modifyUserInfo: e })
							},
							[x]
						)
					return Object(s.jsxs)(s.Fragment, {
						children: [
							Object(s.jsx)(m, {
								defaultUserInfo: ee,
								autoCookieLogin: W,
								userInfo: a,
								toggle: v,
								signOutAjax: Z,
								toggleSwitch: t,
								signUpSwitch: r,
								loginSwitch: c,
								loginModal: y,
								signUpModal: I,
								signInAjax: Q
							}),
							Object(s.jsx)(ce, {
								signInAjax: Q,
								loginPasswordInput: U,
								loginEmailInput: S,
								loginEmail: o,
								loginPassword: l,
								modalSwitch: O,
								loginModal: y,
								loginSwitch: c
							}),
							Object(s.jsx)(re, {
								signUpEmail: b,
								signUpPassword: j,
								signUpUsername: d,
								modalSwitch: O,
								signUpEmailInput: H,
								signUpUsernameInput: A,
								signUpPasswordInput: P,
								signUpModal: I,
								signUpSwitch: r,
								signUpSexSelect: X,
								signUpSex: n,
								signUpAgeSelect: z,
								signUpAge: h,
								signUpAjax: K
							})
						]
					})
				},
				le = a.a.memo(oe),
				ue = n(65),
				de = n(15),
				je =
					(n(49),
					function () {
						var e = Object(i.useState)([
								{ display: 'flex', color: 'rgb(215, 199, 196)' },
								{ display: 'none', color: 'rgb(67, 64, 64)' },
								{ display: 'none', color: 'rgb(67, 64, 64)' },
								{ display: 'none', color: 'rgb(67, 64, 64)' },
								{ display: 'none', color: 'rgb(67, 64, 64)' }
							]),
							t = Object(de.a)(e, 2),
							n = t[0],
							a = t[1],
							c = function () {
								a([n[4]].concat(Object(ue.a)(n.slice(0, 4))))
							},
							r = [
								'https://www.10wallpaper.com/wallpaper/medium/1901/Teleios_ZW_2019_Movie_Poster_medium.jpg',
								'https://p4.wallpaperbetter.com/wallpaper/221/189/102/batman-batman-begins-movies-the-dark-knight-wallpaper-preview.jpg',
								'https://p4.wallpaperbetter.com/wallpaper/36/737/153/movies-hollywood-movies-wallpaper-preview.jpg',
								'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/03/b1649a9d502c4074b5261ea3a16a41b4',
								'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F992EB1345C781E1502B3B2'
							]
						return (
							(function (e, t) {
								var n = Object(i.useRef)()
								Object(i.useEffect)(
									function () {
										n.current = e
									},
									[e]
								),
									Object(i.useEffect)(
										function () {
											if (null !== t) {
												var e = setInterval(function () {
													n.current()
												}, t)
												return function () {
													return clearInterval(e)
												}
											}
										},
										[t]
									)
							})(c, 3e3),
							Object(s.jsxs)('div', {
								className: 'slide',
								children: [
									r.map(function (e, t) {
										return Object(s.jsx)(
											'div',
											{
												style: { display: ''.concat(n[t].display) },
												children: Object(s.jsx)('img', {
													className: 'slideElement',
													src: e
												})
											},
											e
										)
									}),
									Object(s.jsx)('div', {
										className: 'slideController slideLeft',
										onClick: function () {
											a([].concat(Object(ue.a)(n.slice(1, 5)), [n[0]]))
										},
										children: '<'
									}),
									Object(s.jsx)('div', {
										className: 'slideController slideRight',
										onClick: c,
										children: '>'
									}),
									Object(s.jsx)('div', {
										className: 'slideNav',
										children: r.map(function (e, t) {
											return Object(s.jsx)(
												'div',
												{
													className: 'slideNavElement',
													style: { color: ''.concat(n[t].color) },
													id: t,
													onClick: function (e) {
														a(function () {
															var t = n.map(function () {
																return Object.assign(
																	{},
																	{
																		display: 'none',
																		color: 'rgb(67, 64, 64)'
																	}
																)
															})
															t.splice(
																e.target.id,
																1,
																Object.assign(
																	{},
																	{
																		display: 'flex',
																		color: 'rgb(215, 199, 196)'
																	}
																)
															)
															return t
														})
													},
													children: '\u25cf'
												},
												t
											)
										})
									})
								]
							})
						)
					}),
				me = function (e) {
					var t = e.movieList
					return Object(s.jsx)('div', {
						className: 'movie__list',
						children: t.map(function (e) {
							var t = e.movie
							return Object(s.jsxs)(
								o.b,
								{
									to: '/board/'.concat(e.id),
									className: 'mainContents',
									children: [
										Object(s.jsx)('img', { src: t.poster }),
										Object(s.jsx)('div', {
											className: 'mainTitle',
											children: t.title
										})
									]
								},
								e.id
							)
						})
					})
				},
				pe = function () {
					return Object(s.jsx)('div', {
						style: {
							border: '1px solid blue',
							height: '300px',
							margin: '20px 0'
						},
						children: '\ud478\ud130'
					})
				}
			S.a.defaults.withCredentials = !0
			var be = 'MOVIE_GET_PENDING',
				fe = 'MOVIE_GET_SUCCESS',
				ge = 'MOVIE_GET_FAILURE',
				he = (function () {
					var e = Object(y.a)(
						v.a.mark(function e() {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2), S.a.get('http://localhost:3000/card')
											)
										case 2:
											return e.abrupt('return', e.sent)
										case 3:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function () {
						return e.apply(this, arguments)
					}
				})()
			console.log('movieGet :', he)
			var Oe = [],
				xe = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Oe,
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = t.movieList,
						s = t.error
					switch (t.type) {
						case be:
							return e
						case fe:
							return n
						case ge:
							return s
						default:
							return e
					}
				},
				ve = function () {
					var e = Object(u.c)(function (e) {
							return { movieList: e.MovieList }
						}).movieList,
						t = Object(u.b)(),
						n = Object(i.useCallback)(
							function () {
								t(function (e) {
									e({ type: be }),
										he()
											.then(function (t) {
												e({ type: fe, movieList: t.data })
											})
											.catch(function (t) {
												e({ type: ge, error: t })
											})
								})
							},
							[t]
						)
					return (
						Object(i.useEffect)(
							function () {
								n()
							},
							[n]
						),
						Object(s.jsxs)('div', {
							className: 'main',
							children: [
								Object(s.jsx)(je, {}),
								Object(s.jsx)(me, { movieList: e }),
								Object(s.jsx)(pe, {})
							]
						})
					)
				},
				ye = a.a.memo(ve),
				Ie = function (e) {
					var t = e.match,
						n = Object(u.c)(function (e) {
							return { userInfo: e.SignIn.userInfo }
						}).userInfo
					return Object(s.jsxs)('div', {
						className: 'header',
						children: [
							Object(s.jsx)(o.b, { className: 'logo', to: '/' }),
							n &&
								(t
									? Object(s.jsx)(o.b, {
											className: 'writingButton',
											to: '/',
											children: '\uba54\uc778\uc73c\ub85c'
									  })
									: Object(s.jsx)(o.b, {
											className: 'writingButton',
											to: '/write',
											children: '\uae00\uc4f0\uae30'
									  }))
						]
					})
				},
				Se = a.a.memo(Ie),
				Ne =
					(n(74),
					function (e) {
						var t = e.contentsList,
							n = e.movie
						e.history
						return (
							Object(i.useEffect)(function () {
								return function () {}
							}),
							n
								? Object(s.jsx)('div', {
										className: 'movieWrapper',
										children: Object(s.jsxs)(
											'div',
											{
												className: 'movieInfo',
												children: [
													Object(s.jsx)('div', {
														className: 'poster',
														children: Object(s.jsx)('img', {
															src: n.poster,
															alt: ''
														})
													}),
													Object(s.jsxs)('div', {
														className: 'movieDetail',
														children: [
															Object(s.jsx)('div', {
																className: 'title',
																children: n.title
															}),
															Object(s.jsx)('div', {
																className: 'subTitle',
																children: n.sub_title
															}),
															Object(s.jsx)('div', {
																className: 'director',
																children: n.director
															}),
															Object(s.jsx)('div', {
																className: 'story',
																children: n.story1
															}),
															Object(s.jsx)('div', {
																className: 'story',
																children: n.story2
															}),
															Object(s.jsx)('div', {
																className: 'actor',
																children: n.actor
															}),
															Object(s.jsx)('div', {
																className: 'genre',
																children: n.genre
															}),
															Object(s.jsx)('div', {
																className: 'nation',
																children: n.nation
															}),
															Object(s.jsx)('div', {
																className: 'runtime',
																children: n.runtime
															})
														]
													})
												]
											},
											t.id
										)
								  })
								: Object(s.jsx)('img', {
										src: 'https://www.newtide.com.tw/v_comm/global/images/loading.gif',
										alt: ''
								  })
						)
					}),
				we = function (e) {
					var t = e.contentsList
					return Object(s.jsx)('div', {
						className: 'writingHeader',
						children: Object(s.jsxs)(
							'div',
							{
								className: 'userText',
								children: [
									Object(s.jsx)('div', {
										className: 'userTitle',
										children: t.title
									}),
									Object(s.jsx)('div', {
										className: 'userText',
										children: t.text
									})
								]
							},
							t.id
						)
					})
				},
				Ue = function (e) {
					var t = e.comments,
						n = e.contentsList,
						a = e.contentsGetAjax,
						c = e.userInfo,
						r = e.loginModal,
						o = Object(i.useRef)(null),
						l = Object(i.useState)({ like: !1, comment: '', sign: !1 }),
						u = Object(de.a)(l, 2),
						d = u[0],
						j = u[1],
						m = d.like,
						p = d.comment,
						b = d.sign
					Object(i.useEffect)(
						function () {
							a(n.id)
						},
						[a, n.id, m, b]
					),
						console.log(t)
					return Object(s.jsxs)('div', {
						className: 'movie__detail',
						children: [
							c
								? Object(s.jsxs)('form', {
										type: 'submit',
										className: 'commentForm',
										onSubmit: function (e) {
											e.preventDefault(),
												S.a
													.post('http://localhost:3000/board/comment', {
														text: p,
														user: c.id,
														article: n.movieId
													})
													.then(function (e) {
														j(
															Object.assign({}, d, {
																comment: '',
																sign: !b
															})
														),
															o.current.focus()
													})
										},
										children: [
											Object(s.jsx)('textarea', {
												ref: o,
												className: 'user__comment',
												type: 'text',
												value: p,
												onChange: function (e) {
													return j(
														Object.assign({}, d, {
															comment: e.target.value
														})
													)
												}
											}),
											Object(s.jsx)('button', {
												className: 'commentButton',
												type: 'submit',
												children: 'Submit'
											})
										]
								  })
								: Object(s.jsx)('div', {
										onClick: r,
										children:
											'\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694'
								  }),
							t
								.map(function (e, t) {
									return (
										e &&
										Object(s.jsxs)(
											'div',
											{
												className: 'comment__box',
												id: e.id,
												children: [
													Object(s.jsx)('div', {
														className: 'commentUser',
														children: e.user.nickname
													}),
													Object(s.jsx)('div', {
														className: 'commentText',
														children: Object.assign({}, e).text
													}),
													Object(s.jsx)('div', {
														className: 'likeButton',
														onClick: function (t) {
															var n
															console.log('comment:', e.id),
																c &&
																	((n = e.id),
																	S.a
																		.post(
																			'http://localhost:3000/board/like',
																			{
																				user: c.id,
																				comment: n
																			}
																		)
																		.then(function (e) {
																			console.log(e),
																				j(
																					Object.assign({}, d, {
																						like: !m
																					})
																				)
																		}))
														},
														children: '\ud83e\udd0d \uc88b\uc544\uc694'
													}),
													Object(s.jsxs)('div', {
														className: 'likeCount',
														children: [
															' \ud83d\udc9b ',
															Object.assign({}, e).likecount
														]
													})
												]
											},
											t
										)
									)
								})
								.reverse()
						]
					})
				}
			S.a.defaults.withCredentials = !0
			var ke = 'CONTENTS_GET_PENDING',
				Ce = 'CONTENTS_GET_SUCCESS',
				Ee = 'CONTENTS_GET_FAILURE',
				_e = (function () {
					var e = Object(y.a)(
						v.a.mark(function e(t) {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (((e.t0 = t), !e.t0)) {
												e.next = 5
												break
											}
											return (
												(e.next = 4),
												S.a.get(
													'http://localhost:3000/board/article/'.concat(t)
												)
											)
										case 4:
											e.t0 = e.sent
										case 5:
											return e.abrupt('return', e.t0)
										case 6:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function (t) {
						return e.apply(this, arguments)
					}
				})(),
				Me = {
					pending: !0,
					error: !1,
					contentsInfo: {},
					comment: [],
					movie: []
				},
				Le = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Me,
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = t.contentsInfo,
						s = t.comment,
						i = t.movie,
						a = t.error
					switch (t.type) {
						case ke:
							return Object.assign({}, e, { pending: !0, error: !1 })
						case Ce:
							return Object.assign({}, e, {
								pending: !1,
								contentsInfo: n,
								comment: s,
								movie: i
							})
						case Ee:
							return Object.assign({}, e, { pending: !1, error: a })
						default:
							return e
					}
				},
				Be = function (e) {
					var t = e.match,
						n = e.history,
						a = Object(u.b)(),
						c = Object(u.c)(function (e) {
							return {
								contentsList: e.MovieContents.contentsInfo,
								comments: e.MovieContents.comment,
								movie: e.MovieContents.movie,
								userInfo: e.SignIn.userInfo
							}
						}),
						r = c.contentsList,
						o = c.userInfo,
						l = c.movie,
						d = c.comments,
						j = Object(i.useCallback)(
							function (e) {
								a(
									(function (e) {
										return function (t) {
											t({ type: ke }),
												_e(e)
													.then(function (e) {
														console.log('comment:', e.data.comments),
															t({
																type: Ce,
																contentsInfo: e.data,
																comment: e.data.comments,
																movie: e.data.movie
															})
													})
													.catch(function (e) {
														t({ type: Ee, error: e })
													})
										}
									})(e)
								)
							},
							[a]
						),
						m = Object(i.useCallback)(
							function () {
								a(g())
							},
							[a]
						)
					return (
						Object(i.useEffect)(
							function () {
								j(t.params.id)
							},
							[j, t.params.id]
						),
						Number(t.params.id) === r.id &&
							Object(s.jsxs)('div', {
								className: 'main',
								children: [
									Object(s.jsx)(Ne, {
										contentsList: r,
										movie: l,
										history: n
									}),
									Object(s.jsx)(we, { contentsList: r }),
									Object(s.jsx)(Ue, {
										contentsList: r,
										comments: d,
										contentsGetAjax: j,
										loginModal: m,
										userInfo: o
									})
								]
							})
					)
				},
				Pe = a.a.memo(Be),
				Ae =
					(n(133),
					function (e) {
						var t = e.boardList
						return Object(s.jsx)('div', {
							className: 'boardList',
							children: t.map(function (e) {
								return Object(s.jsxs)(
									o.b,
									{
										to: '/board/'.concat(e.id),
										className: 'boardContents',
										children: [
											Object(s.jsx)('div', {
												className: 'boardTitle',
												children: e.title
											}),
											Object(s.jsx)('div', {
												className: 'boardText',
												children: e.text
											})
										]
									},
									e.id
								)
							})
						})
					})
			S.a.defaults.withCredentials = !0
			var Te = 'BOARD_GET_PENDING',
				Ge = 'BOARD_GET_SUCCESS',
				De = 'BOARD_GET_FAILURE',
				Fe = (function () {
					var e = Object(y.a)(
						v.a.mark(function e() {
							return v.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												S.a.get('http://localhost:3000/board')
											)
										case 2:
											return e.abrupt('return', e.sent)
										case 3:
										case 'end':
											return e.stop()
									}
							}, e)
						})
					)
					return function () {
						return e.apply(this, arguments)
					}
				})()
			console.log('boardGet :', Fe)
			var Re = [],
				qe = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Re,
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = t.result
					switch (t.type) {
						case Te:
							return e
						case Ge:
						case De:
							return n
						default:
							return e
					}
				},
				Ye = function () {
					var e = Object(u.c)(function (e) {
							return { boardList: e.BoardList }
						}).boardList,
						t = Object(u.b)(),
						n = Object(i.useCallback)(
							function () {
								t(function (e) {
									e({ type: Te }),
										Fe()
											.then(function (t) {
												e({ type: Ge, result: t.data })
											})
											.catch(function (t) {
												e({ type: De, result: t })
											})
								})
							},
							[t]
						)
					return (
						Object(i.useEffect)(
							function () {
								n()
							},
							[n]
						),
						Object(s.jsx)('div', {
							className: 'main',
							children: Object(s.jsx)(Ae, { boardList: e })
						})
					)
				},
				Je = a.a.memo(Ye),
				Ve = n(22),
				We = n(23),
				He = n(33),
				Xe = n(47),
				ze = n(46),
				Ke = n(64),
				Qe = n.n(Ke),
				Ze = (n(235), n(98))
			Ke.Quill.register('modules/imageUploader', Ze.a)
			var $e = (function (e) {
					Object(Xe.a)(n, e)
					var t = Object(ze.a)(n)
					function n(e) {
						var s
						return (
							Object(Ve.a)(this, n),
							((s = t.call(this, e)).modules = {
								toolbar: [
									[
										'bold',
										'italic',
										'underline',
										'strike',
										'image',
										'video'
									]
								],
								imageUploader: {
									upload: function (e) {
										return new Promise(function (t, n) {
											var i = new FormData()
											i.append('img', e),
												fetch('http://localhost:3000/setting/upload', {
													method: 'POST',
													header: {
														'content-type': 'multipart/form-data'
													},
													body: i
												})
													.then(function (e) {
														return e.json()
													})
													.then(function (e) {
														console.log(e),
															t(e),
															s.setState({ searchUrl: e })
													})
													.catch(function (e) {
														n('Upload failed'), console.error('Error:', e)
													})
										})
									}
								}
							}),
							(s.state = { title: '', content: '', searchUrl: '' }),
							(s.onSubmit = s.onSubmit.bind(Object(He.a)(s))),
							(s.onHandleChange = s.onHandleChange.bind(Object(He.a)(s))),
							console.log('this.state', s.state),
							s
						)
					}
					return (
						Object(We.a)(n, [
							{
								key: 'onHandleChange',
								value: function (e) {
									this.setState({ content: e })
								}
							},
							{
								key: 'onSubmit',
								value: function (e) {
									var t = this
									e.preventDefault(),
										console.log('\uc720\uc54c\uc5d8 : ', this.props.url),
										console.log(
											'\ud788\uc2a4\ud1a0\ub9ac : ',
											this.props.history
										)
									var n = {
										title: this.state.title,
										text: this.state.content,
										url: this.props.url,
										user: this.props.userInfo.id,
										upload_url: this.state.searchUrl
									}
									console.log('variables :', n),
										S.a
											.post('http://localhost:3000/board/write', n)
											.then(function (e) {
												console.log('\uae00 \uac8c\uc2dc axios :', e.data),
													200 === e.status &&
														(t.props.history.push(
															'/board/'.concat(e.data.id)
														),
														console.log('\ud3ec\uc2a4\ud305 :', e),
														console.log(
															'\ud788\uc2a4\ud1a0\ub9ac : ',
															t.props.history
														))
											}),
										this.setState({ content: '', title: '' })
								}
							},
							{
								key: 'render',
								value: function () {
									var e = this
									return Object(s.jsxs)('div', {
										style: { maxWidth: '700px', margin: '2rem auto' },
										children: [
											Object(s.jsx)('div', {
												style: { textAlign: 'center' },
												children: Object(s.jsx)('h1', {
													children:
														'\uac8c\uc2dc\uae00 \uc791\uc131\ud558\uae30'
												})
											}),
											Object(s.jsxs)('form', {
												onSubmit: this.onSubmit,
												children: [
													Object(s.jsx)('input', {
														type: 'text',
														value: this.state.title,
														placeholder: '\uc81c\ubaa9',
														onChange: function (t) {
															e.setState({ title: t.target.value })
														}
													}),
													Object(s.jsx)(Qe.a, {
														modules: this.modules,
														formats: n.formats,
														value: this.state.content,
														placeholder:
															'\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694',
														onChange: this.onHandleChange
													}),
													Object(s.jsx)('button', {
														className: 'submit__text',
														onClick: this.onSubmit,
														children: 'Submit'
													})
												]
											})
										]
									})
								}
							}
						]),
						n
					)
				})(i.Component),
				et = $e
			$e.formats = [
				'header',
				'bold',
				'italic',
				'underline',
				'strike',
				'blockquote',
				'list',
				'bullet',
				'indent',
				'link',
				'image',
				'video',
				'imageBlot'
			]
			n(237)
			var tt = function (e) {
					var t = e.userInfo,
						n = e.history,
						a = Object(i.useState)(''),
						c = Object(de.a)(a, 2),
						r = c[0],
						o = c[1],
						l = Object(i.useState)([]),
						u = Object(de.a)(l, 2),
						d = u[0],
						j = u[1],
						m = Object(i.useState)(''),
						p = Object(de.a)(m, 2),
						b = p[0],
						f = p[1]
					console.log('catchUrl :', b)
					var g = function (e) {
							e.preventDefault(), f(e.target.value)
						},
						h = (function () {
							var e = Object(y.a)(
								v.a.mark(function e(t) {
									var n
									return v.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														o(''),
														(e.next = 3),
														S.a.get(
															'http://localhost:3000/board/movies/'.concat(
																r
															),
															{}
														)
													)
												case 3:
													;(n = e.sent),
														console.log(
															'\uc81c\ubaa9 \uac80\uc0c9 res : ',
															n
														),
														j(n.data.items)
												case 6:
												case 'end':
													return e.stop()
											}
									}, e)
								})
							)
							return function (t) {
								return e.apply(this, arguments)
							}
						})(),
						O = d.map(function (e, t) {
							return Object(s.jsxs)(
								'div',
								{
									className: 'movie__result',
									children: [
										Object(s.jsx)('img', { src: e.image, alt: e.link }),
										Object(s.jsx)('button', {
											className: 'url',
											value: e.link,
											onClick: g,
											children: e.link
										}),
										console.log('catchUrl 2 :', b)
									]
								},
								t
							)
						})
					return Object(s.jsx)('div', {
						children:
							'' !== b
								? Object(s.jsx)(et, { userInfo: t, url: b, history: n })
								: Object(s.jsxs)('div', {
										children: [
											Object(s.jsx)('input', {
												type: 'text',
												value: r,
												placeholder: '\uc601\ud654 \uc81c\ubaa9',
												onKeyPress: function (e) {
													'Enter' === e.key && h()
												},
												onChange: function (e) {
													o(e.target.value)
												}
											}),
											Object(s.jsx)('button', {
												onClick: h,
												children: '\uac80\uc0c9'
											}),
											Object(s.jsx)('div', { children: O })
										]
								  })
					})
				},
				nt = function (e) {
					var t = e.history,
						n = Object(u.c)(function (e) {
							return { userInfo: e.SignIn.userInfo }
						}).userInfo
					return Object(s.jsx)('div', {
						className: 'main',
						children: Object(s.jsx)(tt, { userInfo: n, history: t })
					})
				},
				st = a.a.memo(nt),
				it = function (e) {
					var t = e.modifyAge,
						n = e.modifyGender,
						a = e.emailChangeInput,
						c = e.ageChangeSelect,
						r = e.modifyEmail,
						o = e.genderChangeSelect,
						l = e.modifyPassword,
						u = e.passwordChangeInput,
						d = e.loginUserInfo,
						j = e.modifyNickname,
						m = e.nickNameChangeInput,
						p = e.modifyUserInfoPost,
						b = e.autoCookieLogin,
						f = e.modifyUserInfo,
						g = Object(i.useState)({
							nicknameModify: !1,
							passwordModify: !1,
							emailModify: !1,
							genderModify: !1,
							ageModify: !1
						}),
						h = Object(de.a)(g, 2),
						O = h[0],
						x = h[1]
					Object(i.useEffect)(
						function () {
							b(JSON.parse(sessionStorage.getItem('userInfo')))
						},
						[sessionStorage.getItem('userInfo')]
					)
					var v = function (e) {
						e.preventDefault(),
							'nicknameModifyButton' === e.target.className &&
								(O.nicknameModify && '' !== j
									? (console.log('nickname submit'),
									  x(
											Object.assign({}, O, {
												nicknameModify: !O.nicknameModify
											})
									  ))
									: x(
											Object.assign({}, O, {
												nicknameModify: !O.nicknameModify
											})
									  )),
							'passwordModifyButton' === e.target.className &&
								(O.passwordModify && '' !== l
									? (console.log('password submit'),
									  x(
											Object.assign({}, O, {
												passwordModify: !O.passwordModify
											})
									  ))
									: x(
											Object.assign({}, O, {
												passwordModify: !O.passwordModify
											})
									  )),
							'emailModifyButton' === e.target.className &&
								(O.emailModify && '' !== r
									? (console.log('email submit'),
									  x(
											Object.assign({}, O, { emailModify: !O.emailModify })
									  ))
									: x(
											Object.assign({}, O, { emailModify: !O.emailModify })
									  )),
							'submitModifyButton' === e.target.className &&
								('' === j && m(f.nickname),
								'' === r && a(f.email),
								'' === t && c(f.age),
								'' === t && o(f.gender),
								p(
									Object.assign({}, d, {
										email: r,
										nickname: j,
										age: t,
										gender: n
									})
								))
					}
					return (
						console.log(d),
						d &&
							Object(s.jsx)('div', {
								className: 'modifyUserInfo',
								children: Object(s.jsxs)('form', {
									action: '',
									children: [
										Object(s.jsxs)('label', {
											htmlFor: 'nickname',
											children: [
												'\ub2c9\ub124\uc784:',
												O.nicknameModify
													? Object(s.jsx)('input', {
															type: 'text',
															value: j,
															onChange: function (e) {
																return m(e.target.value)
															}
													  })
													: Object(s.jsx)('span', {
															className: 'modifyNicknameText',
															children: j || d.nickname
													  })
											]
										}),
										Object(s.jsx)('button', {
											className: 'nicknameModifyButton',
											onClick: v,
											children: O.nicknameModify
												? '\ud655\uc778'
												: '\uc218\uc815'
										}),
										Object(s.jsx)('p', {}),
										Object(s.jsxs)('label', {
											htmlFor: 'password',
											children: [
												'\ud328\uc2a4\uc6cc\ub4dc:',
												O.passwordModify
													? Object(s.jsx)('input', {
															type: 'password',
															value: l,
															onChange: function (e) {
																return u(e.target.value)
															}
													  })
													: Object(s.jsx)('span', {
															className: 'modifyPasswordText',
															children: '********'
													  })
											]
										}),
										Object(s.jsx)('button', {
											className: 'passwordModifyButton',
											onClick: v,
											children: O.passwordModify
												? '\ud655\uc778'
												: '\uc218\uc815'
										}),
										Object(s.jsx)('p', {}),
										Object(s.jsxs)('label', {
											htmlFor: 'email',
											children: [
												'\uc774\uba54\uc77c:',
												O.emailModify
													? Object(s.jsx)('input', {
															type: 'email',
															value: r,
															onChange: function (e) {
																return a(e.target.value)
															}
													  })
													: Object(s.jsx)('span', {
															className: 'modifyEmailText',
															children: r || d.email
													  })
											]
										}),
										Object(s.jsx)('button', {
											className: 'emailModifyButton',
											onClick: v,
											children: O.emailModify
												? '\ud655\uc778'
												: '\uc218\uc815'
										}),
										Object(s.jsx)('p', {}),
										Object(s.jsx)('label', {
											htmlFor: 'gender',
											children: Object(s.jsxs)('select', {
												defaultValue: d.gender,
												onChange: function (e) {
													return o(e.target.value)
												},
												children: [
													Object(s.jsx)('option', {
														value: 'DEFAULT',
														children: '\uc131\ubcc4'
													}),
													Object(s.jsx)('option', {
														value: 'male',
														children: '\ub0a8\uc131'
													}),
													Object(s.jsx)('option', {
														value: 'female',
														children: '\uc5ec\uc131'
													})
												]
											})
										}),
										Object(s.jsx)('p', {}),
										Object(s.jsx)('label', {
											htmlFor: 'age',
											children: Object(s.jsxs)('select', {
												defaultValue: d.age,
												onChange: function (e) {
													return c(e.target.value)
												},
												children: [
													Object(s.jsx)('option', {
														value: 'DEFAULT',
														children: '\ub098\uc774'
													}),
													[10, 20, 30, 40, 50, 60].map(function (e, t) {
														return Object(s.jsxs)(
															'option',
															{ value: e, children: [e, '\ub300'] },
															t
														)
													})
												]
											})
										}),
										Object(s.jsx)('p', {}),
										Object(s.jsx)('button', {
											className: 'submitModifyButton',
											onClick: v,
											children: '\ud655\uc778'
										})
									]
								})
							})
					)
				},
				at = function (e) {
					e.match, e.history
					var t = Object(u.b)(),
						n = Object(u.c)(function (e) {
							return {
								modifyNickname: e.UserInfo.nickname,
								modifyPassword: e.UserInfo.password,
								modifyAge: e.UserInfo.age,
								modifyGender: e.UserInfo.gender,
								modifyEmail: e.UserInfo.email,
								modifyUserInfo: e.UserInfo.modifyUserInfo,
								loginUserInfo: e.SignIn.userInfo
							}
						}),
						a = n.modifyUserInfo,
						c = n.modifyNickname,
						r = n.loginUserInfo,
						o = n.modifyPassword,
						l = n.modifyAge,
						d = n.modifyGender,
						j = n.modifyEmail,
						m = Object(i.useCallback)(
							function (e) {
								t(M(e))
							},
							[t]
						),
						p = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return function (t) {
											t({ type: ee }),
												console.log(e),
												se(e)
													.then(function (n) {
														console.log(n),
															200 === n.status &&
																sessionStorage.setItem(
																	'userInfo',
																	JSON.stringify(e)
																),
															t({ type: te, result: n.data })
													})
													.catch(function (e) {
														console.log(e), t({ type: ne, error: e })
													})
										}
									})(e)
								)
							},
							[t]
						),
						b = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return { type: X, nickname: e }
									})(e)
								)
							},
							[t]
						),
						f = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return { type: K, password: e }
									})(e)
								)
							},
							[t]
						),
						g = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return { type: z, email: e }
									})(e)
								)
							},
							[t]
						),
						h = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return { type: Z, age: e }
									})(e)
								)
							},
							[t]
						),
						O = Object(i.useCallback)(
							function (e) {
								t(
									(function (e) {
										return { type: Q, gender: e }
									})(e)
								)
							},
							[t]
						)
					return Object(s.jsx)('div', {
						className: 'main',
						children: Object(s.jsx)(it, {
							modifyUserInfo: a,
							autoCookieLogin: m,
							modifyUserInfoPost: p,
							modifyAge: l,
							emailChangeInput: g,
							modifyEmail: j,
							passwordChangeInput: f,
							modifyPassword: o,
							loginUserInfo: r,
							modifyNickname: c,
							nickNameChangeInput: b,
							modifyGender: d,
							genderChangeSelect: O,
							ageChangeSelect: h
						})
					})
				},
				ct = a.a.memo(at)
			var rt = function () {
					return Object(s.jsxs)(l.c, {
						children: [
							Object(s.jsx)(l.a, {
								exact: !0,
								path: '/',
								render: function (e) {
									var t = e.history,
										n = e.match
									return Object(s.jsxs)('div', {
										className: 'wrapper',
										children: [
											Object(s.jsx)(Se, {}),
											Object(s.jsx)(le, {}),
											Object(s.jsx)(ye, { history: t, match: n })
										]
									})
								}
							}),
							Object(s.jsx)(l.a, {
								exact: !0,
								path: '/write',
								render: function (e) {
									var t = e.match,
										n = e.history
									return Object(s.jsxs)('div', {
										className: 'wrapper',
										children: [
											Object(s.jsx)(Se, { match: t }),
											Object(s.jsx)(le, {}),
											Object(s.jsx)(st, { history: n, match: t })
										]
									})
								}
							}),
							Object(s.jsx)(l.a, {
								exact: !0,
								path: '/board',
								render: function (e) {
									var t = e.history,
										n = e.match
									return Object(s.jsxs)('div', {
										className: 'wrapper',
										children: [
											Object(s.jsx)(Se, {}),
											Object(s.jsx)(le, {}),
											Object(s.jsx)(Je, { history: t, match: n })
										]
									})
								}
							}),
							Object(s.jsx)(l.a, {
								exact: !0,
								path: '/board/:id',
								render: function (e) {
									var t = e.history,
										n = e.match
									return Object(s.jsxs)('div', {
										className: 'wrapper',
										children: [
											Object(s.jsx)(Se, {}),
											Object(s.jsx)(le, {}),
											Object(s.jsx)(Pe, { history: t, match: n })
										]
									})
								}
							}),
							Object(s.jsx)(l.a, {
								exact: !0,
								path: '/userInfo',
								render: function (e) {
									var t = e.history,
										n = e.match
									return Object(s.jsxs)('div', {
										className: 'wrapper',
										children: [
											Object(s.jsx)(Se, {}),
											Object(s.jsx)(le, {}),
											Object(s.jsx)(ct, { history: t, match: n })
										]
									})
								}
							})
						]
					})
				},
				ot = function () {
					return Object(s.jsx)(o.a, { children: Object(s.jsx)(rt, {}) })
				},
				lt = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(3)
							.then(n.bind(null, 239))
							.then(function (t) {
								var n = t.getCLS,
									s = t.getFID,
									i = t.getFCP,
									a = t.getLCP,
									c = t.getTTFB
								n(e), s(e), i(e), a(e), c(e)
							})
				},
				ut = n(19),
				dt = Object(ut.combineReducers)({
					SideBar: O,
					SignIn: A,
					SignUp: H,
					MovieList: xe,
					MovieContents: Le,
					BoardList: qe,
					UserInfo: ae
				}),
				jt = n(95),
				mt = n.n(jt),
				pt = n(96),
				bt = n(97),
				ft = Object(ut.createStore)(
					dt,
					Object(bt.composeWithDevTools)(
						Object(ut.applyMiddleware)(pt.a, mt.a)
					)
				)
			console.log(ft.getState())
			var gt = ft
			r.a.render(
				Object(s.jsx)(u.a, { store: gt, children: Object(s.jsx)(ot, {}) }),
				document.getElementById('root')
			),
				lt()
		},
		25: function (e, t, n) {},
		49: function (e, t, n) {},
		74: function (e, t, n) {}
	},
	[[238, 1, 2]]
])
//# sourceMappingURL=main.d54af49a.chunk.js.map
