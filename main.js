var $ = $

function QModal(selectors) {
  this.isBreak = false;
  this.selectors = []
  for(var i = 0; i<selectors.length ; i++) {
    this.add(selectors[i])
  }
}

QModal.prototype.start = function() {
  var modalOption = this._getModalOption(this.selectors[0].option)
  $(this.selectors[0].selector).modal(modalOption)
}

QModal.prototype.add = function(selector) {
  if (!this.selectors) {
    this.selectors = []
  }
  this.selectors.push(this._getModalObject(selector))
  console.log(this.selectors)
  if (this.selectors.length == 1) {
    return;
  }

  var previousObject = this.selectors[this.selectors.length - 2]
  var addedObject = this.selectors[this.selectors.length - 1]
  $(previousObject.selector).on('hidden.bs.modal', function(){
    if (this.isBreak) {
      return;
    }
    var modalOption = this._getModalOption(addedObject.option)
    $(addedObject.selector).modal(modalOption)
  }.bind(this))
}

QModal.prototype._getModalObject = function(selector) {
  var modalSelector;
  var option = undefined
  if (typeof selector == 'object') {
    modalSelector = selector.selector
    option = {
      keyboard: selector.keyboard,
      backdrop: selector.backdrop,
      focus: selector.focus
    }
  } else {
    modalSelector = selector
  }

  return {
    selector: modalSelector,
    option: option
  }
}

QModal.prototype._getModalOption = function(option) {
  var modalOption = {
    show: true
  }
  if (option) {
    modalOption.keyboard = !!option.keyboard ? option.keyboard : true
    modalOption.backdrop = !!option.backdrop ? option.backdrop : true
    modalOption.focus = !!option.focus ? option.focus : true
  }
  return modalOption
}
