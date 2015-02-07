function RSVPForm(element, options) {
  this.element = element;
  this.thanks = options.thanks;
  this.initialize();
}

RSVPForm.prototype = {
  initialize: function() {
    this.element.addEventListener('submit', this.onSubmit.bind(this));
    var radios = this.element.querySelectorAll('input[type="radio"]');
    for(var i = 0; i < radios.length; i++) {
      var radio = radios[i];
      radio.addEventListener('click', this.onClickRadio.bind(this));
    }
  },

  hasAccepted: function() {
    return this.accepted == "Delightfully accepts";
  },

  onClickRadio: function(e) {
    if(this.binding) {
      this.binding.sync();
    }
  },

  onSubmit: function(e) {
    this.element.style.display = 'none';
    this.thanks.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  var rsvpForm = new RSVPForm(document.querySelector('#rsvp-form'), {
    thanks: document.querySelector('#rsvp-thanks')
  });
  rsvpForm.binding = rivets.bind(document.querySelector('#rsvp-form'), {'rsvp-form': rsvpForm});
});
