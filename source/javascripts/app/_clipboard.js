
  jQuery(window).on('load', function() {
    $('pre.highlight').each(function() {
      $(this).prepend('<button class="copy-btn">Copy</button>');

      const clipboard = new ClipboardJS(this.querySelector('.copy-btn'), {
        target: function(trigger) {
          return trigger.nextElementSibling;
        }
      });

      clipboard.on('success', function(e) {
        $(e.trigger).text('Copied!');
        e.clearSelection();

        setTimeout(function() {
          $(e.trigger).text('Copy');
        }, 2000);
      });
    });
  });
