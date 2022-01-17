function Q(e, t, r, i, o) {
  for (var s, c, l = 0, p = 0, d = 0, m = 0, g = 0, b = 0, h = 0, v = 0, y = 0, E = 0, w = 0, k = 0, B = 0, P = 0, j = 0, O = 0, X = 0, z = 0, W = 0, K = r.length, re = K - 1, ie = "", oe = "", se = "", ce = "", ue = "", le = ""; j < K;) {
    if (h = r.charCodeAt(j), j === re && p + m + d + l !== 0 && (0 !== p && (h = 47 === p ? 10 : 47), m = d = l = 0, K++, re++), p + m + d + l === 0) {
      if (j === re && (O > 0 && (oe = oe.replace(a, "")), oe.trim().length > 0)) {
        switch (h) {
          case 32:
          case 9:
          case 59:
          case 13:
          case 10:
            break;

          default:
            oe += r.charAt(j);
        }

        h = 59;
      }

      if (1 === X) switch (h) {
        case 123:
        case 125:
        case 59:
        case 34:
        case 39:
        case 40:
        case 41:
        case 44:
          X = 0;

        case 9:
        case 13:
        case 10:
        case 32:
          break;

        default:
          for (X = 0, W = j, g = h, j--, h = 59; W < K;) switch (r.charCodeAt(W++)) {
            case 10:
            case 13:
            case 59:
              ++j, h = g, W = K;
              break;

            case 58:
              O > 0 && (++j, h = g);

            case 123:
              W = K;
          }

      }

      switch (h) {
        case 123:
          for (g = (oe = oe.trim()).charCodeAt(0), w = 1, W = ++j; j < K;) {
            switch (h = r.charCodeAt(j)) {
              case 123:
                w++;
                break;

              case 125:
                w--;
                break;

              case 47:
                switch (b = r.charCodeAt(j + 1)) {
                  case 42:
                  case 47:
                    j = ae(b, j, re, r);
                }

                break;

              case 91:
                h++;

              case 40:
                h++;

              case 34:
              case 39:
                for (; j++ < re && r.charCodeAt(j) !== h;);

            }

            if (0 === w) break;
            j++;
          }

          switch (se = r.substring(W, j), 0 === g && (g = (oe = oe.replace(n, "").trim()).charCodeAt(0)), g) {
            case 64:
              switch (O > 0 && (oe = oe.replace(a, "")), b = oe.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  s = t;
                  break;

                default:
                  s = H;
              }

              if (W = (se = Q(t, s, se, b, o + 1)).length, N > 0 && 0 === W && (W = oe.length), U > 0 && (c = ne(3, se, s = Z(H, oe, z), t, I, T, W, b, o, i), oe = s.join(""), void 0 !== c && 0 === (W = (se = c.trim()).length) && (b = 0, se = "")), W > 0) switch (b) {
                case 115:
                  oe = oe.replace(x, te);

                case 100:
                case 109:
                case 45:
                  se = oe + "{" + se + "}";
                  break;

                case 107:
                  se = (oe = oe.replace(_, "$1 $2" + (q > 0 ? G : ""))) + "{" + se + "}", se = 1 === M || 2 === M && ee("@" + se, 3) ? "@" + S + se + "@" + se : "@" + se;
                  break;

                default:
                  se = oe + se, 112 === i && (ce += se, se = "");
              } else se = "";
              break;

            default:
              se = Q(t, Z(t, oe, z), se, i, o + 1);
          }

          ue += se, k = 0, X = 0, P = 0, O = 0, z = 0, B = 0, oe = "", se = "", h = r.charCodeAt(++j);
          break;

        case 125:
        case 59:
          if ((W = (oe = (O > 0 ? oe.replace(a, "") : oe).trim()).length) > 1) switch (0 === P && (45 === (g = oe.charCodeAt(0)) || g > 96 && g < 123) && (W = (oe = oe.replace(" ", ":")).length), U > 0 && void 0 !== (c = ne(1, oe, t, e, I, T, ce.length, i, o, i)) && 0 === (W = (oe = c.trim()).length) && (oe = "\0\0"), g = oe.charCodeAt(0), b = oe.charCodeAt(1), g) {
            case 0:
              break;

            case 64:
              if (105 === b || 99 === b) {
                le += oe + r.charAt(j);
                break;
              }

            default:
              if (58 === oe.charCodeAt(W - 1)) break;
              ce += Y(oe, g, b, oe.charCodeAt(2));
          }
          k = 0, X = 0, P = 0, O = 0, z = 0, oe = "", h = r.charCodeAt(++j);
      }
    }

    switch (h) {
      case 13:
      case 10:
        if (p + m + d + l + L === 0) switch (E) {
          case 41:
          case 39:
          case 34:
          case 64:
          case 126:
          case 62:
          case 42:
          case 43:
          case 47:
          case 45:
          case 58:
          case 44:
          case 59:
          case 123:
          case 125:
            break;

          default:
            P > 0 && (X = 1);
        }
        47 === p ? p = 0 : D + k === 0 && 107 !== i && oe.length > 0 && (O = 1, oe += "\0"), U * V > 0 && ne(0, oe, t, e, I, T, ce.length, i, o, i), T = 1, I++;
        break;

      case 59:
      case 125:
        if (p + m + d + l === 0) {
          T++;
          break;
        }

      default:
        switch (T++, ie = r.charAt(j), h) {
          case 9:
          case 32:
            if (m + l + p === 0) switch (v) {
              case 44:
              case 58:
              case 9:
              case 32:
                ie = "";
                break;

              default:
                32 !== h && (ie = " ");
            }
            break;

          case 0:
            ie = "\\0";
            break;

          case 12:
            ie = "\\f";
            break;

          case 11:
            ie = "\\v";
            break;

          case 38:
            m + p + l === 0 && D > 0 && (z = 1, O = 1, ie = "\f" + ie);
            break;

          case 108:
            if (m + p + l + F === 0 && P > 0) switch (j - P) {
              case 2:
                112 === v && 58 === r.charCodeAt(j - 3) && (F = v);

              case 8:
                111 === y && (F = y);
            }
            break;

          case 58:
            m + p + l === 0 && (P = j);
            break;

          case 44:
            p + d + m + l === 0 && (O = 1, ie += "\r");
            break;

          case 34:
          case 39:
            0 === p && (m = m === h ? 0 : 0 === m ? h : m);
            break;

          case 91:
            m + p + d === 0 && l++;
            break;

          case 93:
            m + p + d === 0 && l--;
            break;

          case 41:
            m + p + l === 0 && d--;
            break;

          case 40:
            if (m + p + l === 0) {
              if (0 === k) switch (2 * v + 3 * y) {
                case 533:
                  break;

                default:
                  w = 0, k = 1;
              }
              d++;
            }

            break;

          case 64:
            p + d + m + l + P + B === 0 && (B = 1);
            break;

          case 42:
          case 47:
            if (m + l + d > 0) break;

            switch (p) {
              case 0:
                switch (2 * h + 3 * r.charCodeAt(j + 1)) {
                  case 235:
                    p = 47;
                    break;

                  case 220:
                    W = j, p = 42;
                }

                break;

              case 42:
                47 === h && 42 === v && W + 2 !== j && (33 === r.charCodeAt(W + 2) && (ce += r.substring(W, j + 1)), ie = "", p = 0);
            }

        }

        if (0 === p) {
          if (D + m + l + B === 0 && 107 !== i && 59 !== h) switch (h) {
            case 44:
            case 126:
            case 62:
            case 43:
            case 41:
            case 40:
              if (0 === k) {
                switch (v) {
                  case 9:
                  case 32:
                  case 10:
                  case 13:
                    ie += "\0";
                    break;

                  default:
                    ie = "\0" + ie + (44 === h ? "" : "\0");
                }

                O = 1;
              } else switch (h) {
                case 40:
                  P + 7 === j && 108 === v && (P = 0), k = ++w;
                  break;

                case 41:
                  0 == (k = --w) && (O = 1, ie += "\0");
              }

              break;

            case 9:
            case 32:
              switch (v) {
                case 0:
                case 123:
                case 125:
                case 59:
                case 44:
                case 12:
                case 9:
                case 32:
                case 10:
                case 13:
                  break;

                default:
                  0 === k && (O = 1, ie += "\0");
              }

          }
          oe += ie, 32 !== h && 9 !== h && (E = h);
        }

    }

    y = v, v = h, j++;
  }

  if (W = ce.length, N > 0 && 0 === W && 0 === ue.length && 0 === t[0].length == 0 && (109 !== i || 1 === t.length && (D > 0 ? J : $) === t[0]) && (W = t.join(",").length + 2), W > 0) {
    function _mmfunc1185(e) {
      for (var t, n, r = 0, i = e.length, o = Array(i); r < i; ++r) {
        for (var s = e[r].split(u), c = "", l = 0, p = 0, d = 0, m = 0, _ = s.length; l < _; ++l) if (!(0 === (p = (n = s[l]).length) && _ > 1)) {
          if (d = c.charCodeAt(c.length - 1), m = n.charCodeAt(0), t = "", 0 !== l) switch (d) {
            case 42:
            case 126:
            case 62:
            case 43:
            case 32:
            case 40:
              break;

            default:
              t = " ";
          }

          switch (m) {
            case 38:
              n = t + J;

            case 126:
            case 62:
            case 43:
            case 32:
            case 41:
            case 40:
              break;

            case 91:
              n = t + n + J;
              break;

            case 58:
              switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
                case 530:
                  if (R > 0) {
                    n = t + n.substring(8, p - 1);
                    break;
                  }

                default:
                  (l < 1 || s[l - 1].length < 1) && (n = t + J + n);
              }

              break;

            case 44:
              t = "";

            default:
              n = p > 1 && n.indexOf(":") > 0 ? t + n.replace(C, "$1" + J + "$2") : t + n + J;
          }

          c += n;
        }

        o[r] = c.replace(a, "").trim();
      }

      return o;
    }

    if (s = 0 === D && 107 !== i ? _mmfunc1185(t) : t, U > 0 && void 0 !== (c = ne(2, ce, s, e, I, T, W, i, o, i)) && 0 === (ce = c).length) return le + ce + ue;

    if (ce = s.join(",") + "{" + ce + "}", M * F != 0) {
      switch (2 !== M || ee(ce, 2) || (F = 0), F) {
        case 111:
          ce = ce.replace(A, ":-moz-$1") + ce;
          break;

        case 112:
          ce = ce.replace(f, "::" + S + "input-$1") + ce.replace(f, "::-moz-$1") + ce.replace(f, ":-ms-input-$1") + ce;
      }

      F = 0;
    }
  }

  return le + ce + ue;
}