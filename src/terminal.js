const Terminal = function (containerID, options) {
  if (!containerID) return;
  var defaults = {
    welcome: "",
    prompt: "",
    separator: "&gt;",
    theme: "modern",
  };
  options = options || defaults;
  options.welcome = options.welcome || defaults.welcome;
  options.prompt = options.prompt || defaults.prompt;
  options.separator = options.separator || defaults.separator;
  options.theme = options.theme || defaults.theme;
  var extensions = Array.prototype.slice.call(arguments, 2);
  var _history = localStorage.history ? JSON.parse(localStorage.history) : [];
  var _histpos = _history.length;
  var _histtemp = "";
  var _terminal = document.getElementById(containerID);
  _terminal.classList.add("terminal");
  _terminal.classList.add("terminal-" + options.theme);
  _terminal.insertAdjacentHTML(
    "beforeEnd",
    [
      '<div class="background"><div class="interlace"></div></div>',
      '<div class="container">',
      "<output></output>",
      '<table class="input-line">',
      '<tr><td nowrap><div class="prompt">' +
        options.prompt +
        options.separator +
        '</div></td><td width="100%"><input class="cmdline" spellcheck="false" autofocus /></td></tr>',
      "</table>",
      "</div>",
    ].join("")
  );
  var _container = _terminal.querySelector(".container");
  var _inputLine = _container.querySelector(".input-line");
  var _cmdLine = _container.querySelector(".input-line .cmdline");
  var _output = _container.querySelector("output");
  var _prompt = _container.querySelector(".prompt");
  var _background = document.querySelector(".background");
  _output.addEventListener(
    "DOMSubtreeModified",
    function (e) {
      setTimeout(function () {
        _cmdLine.scrollIntoView();
      }, 0);
    },
    false
  );
  if (options.welcome) {
    output(options.welcome);
  }
  window.addEventListener(
    "click",
    function (e) {
      _cmdLine.focus();
    },
    false
  );
  _output.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
    },
    false
  );
  _cmdLine.addEventListener("click", inputTextClick, false);
  _inputLine.addEventListener(
    "click",
    function (e) {
      _cmdLine.focus();
    },
    false
  );
  _cmdLine.addEventListener("keyup", historyHandler, false);
  _cmdLine.addEventListener("keydown", processNewCommand, false);
  window.addEventListener(
    "keyup",
    function (e) {
      _cmdLine.focus();
      e.stopPropagation();
      e.preventDefault();
    },
    false
  );
  function inputTextClick(e) {
    this.value = this.value;
  }
  function historyHandler(e) {
    if (e.keyCode === 27) {
      this.value = "";
      e.stopPropagation();
      e.preventDefault();
    }
    if (_history.length && (e.keyCode === 38 || e.keyCode === 40)) {
      if (_history[_histpos]) {
        _history[_histpos] = this.value;
      } else {
        _histtemp = this.value;
      }
      if (e.keyCode === 38) {
        _histpos--;
        if (_histpos < 0) {
          _histpos = 0;
        }
      } else if (e.keyCode === 40) {
        _histpos++;
        if (_histpos > _history.length) {
          _histpos = _history.length;
        }
      }
      this.value = _history[_histpos] ? _history[_histpos] : _histtemp;
      this.value = this.value;
    }
  }
  function processNewCommand(e) {
    if (e.keyCode !== 13) return;
    var cmdline = this.value;
    if (cmdline) {
      _history[_history.length] = cmdline;
      localStorage["history"] = JSON.stringify(_history);
      _histpos = _history.length;
    }
    var line = this.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
    line.removeAttribute("id");
    line.classList.add("line");
    var input = line.querySelector("input.cmdline");
    input.autofocus = false;
    input.readOnly = true;
    input.insertAdjacentHTML("beforebegin", input.value);
    input.parentNode.removeChild(input);
    _output.appendChild(line);
    _inputLine.classList.add("hidden");
    this.value = "";
    if (cmdline && cmdline.trim()) {
      var args = cmdline.split(" ").filter(function (val, i) {
        return val;
      });
      var cmd = args[0];
      args = args.splice(1);
    }
    if (cmd) {
      var response = false;
      for (var index in extensions) {
        var ext = extensions[index];
        if (ext.execute) response = ext.execute(cmd, args);
        if (response !== false) break;
      }
      if (response === false) response = cmd + ": command not found";
      output(response);
    }
    _inputLine.classList.remove("hidden");
  }
  function clear() {
    _output.innerHTML = "";
    _cmdLine.value = "";
    _background.style.minHeight = "";
  }
  function output(html) {
    if (!html) html = "";
    _output.insertAdjacentHTML("beforeEnd", html.replace(/\r?\n/g, "<br />"));
    _cmdLine.scrollIntoView();
  }
  return {
    clear: clear,
    output: output,
    setPrompt: function (prompt) {
      _prompt.innerHTML = prompt + options.separator;
    },
    getPrompt: function () {
      return _prompt.innerHTML.replace(new RegExp(options.separator + "$"), "");
    },
    setTheme: function (theme) {
      _terminal.classList.remove("terminal-" + options.theme);
      options.theme = theme;
      _terminal.classList.add("terminal-" + options.theme);
    },
    getTheme: function () {
      return options.theme;
    },
  };
};
if (typeof module !== "undefined" && module.exports) {
  module.exports = Terminal;
} else {
  var oldTerminal = global.Terminal;
  Terminal.noConflict = function () {
    global.Terminal = oldTerminal;
    return Terminal;
  };
  global.Terminal = Terminal;
}

export default Terminal;
