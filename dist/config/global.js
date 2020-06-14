function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class G {}

_defineProperty(G, "app", void 0);

_defineProperty(G, "makeAppUrl", function (x = '') {
  return G.app.props.app_url + x;
});