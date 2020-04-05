var $ = $

function QModal(ids) {
  this.ids = ids
  this.isBreak = false;
}

QModal.prototype.start = function() {
  for(var i = 0; i<this.ids.length ; i++) {
    if (i == this.ids.length - 1) {
      break;
    }

    $("#" + this.ids[i]).on('hidden.bs.modal', function(index){
      if (this.isBreak) {
        return;
      }
      $('#' + this.ids[index + 1]).modal('show')
    }.bind(this, i));
  }

  // display
  $('#' + this.ids[0]).modal('show')
}
