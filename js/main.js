let front = {
  hamburger: $('.hamburger'),
  header: $('.header'),
  navbar: $('.mobile-menu'),
  body: $('body'),
  init: function () {
      this.events();      
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.navbar.addClass('active');
        this.body.addClass('overflow');
        } else {
            this.hamburger.removeClass('open');
            this.navbar.removeClass('active');
            this.body.removeClass('overflow');
        }
    },
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.menu-close', function () {
          self.toggleNav();
      });

      $(".more-btn").on("click", function(e) {
        let content = $(this).prev('.more-content');
        content.toggleClass('active');
        if (content.hasClass('active')) {
          content.slideDown();
          $(this).text('Voir moins').toggleClass('active');
        } else {
          content.slideUp();
          $(this).text('Voir plus').toggleClass('active');
        }
      });
      $(".show-more-text").on("click", function(e) {
        let content = $(this).prev('.page-description-additional');
        content.toggleClass('active');
        if (content.hasClass('active')) {
          content.slideToggle();
          $(this).text('Lire moins').toggleClass('active');
        } else {
          content.slideToggle();
          $(this).text('Lire la suite').toggleClass('active');
        }
      });

      $(".filter-more-toggle").on("click", function(e) {
        e.preventDefault();
        let content = $(this).prev('.filter-more-content');
        content.toggleClass('active');
        if (content.hasClass('active')) {
          $(this).prev('.filter-more-content').slideDown();
          $(this).text('moins de filtres').toggleClass('active');
        } else {
          $(this).prev('.filter-more-content').slideUp();
          $(this).text('Voir tous les filtres').toggleClass('active');
        }
      });

      $(document).on('click', '.toggle-filters', function (e) {
        e.preventDefault()
        $('.product-sidebar').toggleClass('active');
      });

      $(document).on('click', '.filter-toggle', function (e) {
        e.preventDefault()
        let item = $(this);
        let list = $(this).next('.filter-list');
        if (item.hasClass('active')) {
            item.removeClass('active');
            list.slideToggle();
        } else {
            item.addClass('active');
            list.slideToggle();
        }
      });
  }
};

jQuery(function () {
  front.init();
});
