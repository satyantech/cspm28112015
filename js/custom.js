(function(){
var app = angular.module("bookStore",[]);

var books = [{"bookCode":"1001","bookTitle":"Book - 1001","coverImage":"img/book-cover/1001.jpg","price":"123.00","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"10"},
	{"bookCode":"1002","bookTitle":"Book - 1002","coverImage":"img/book-cover/1002.jpg","price":"156.65","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"8"},
	{"bookCode":"1003","bookTitle":"Book - 1003","coverImage":"img/book-cover/1003.jpg","price":"122.00","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"4"},
	{"bookCode":"1004","bookTitle":"Book - 1004","coverImage":"img/book-cover/1004.jpg","price":"176.87","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"3"},
	{"bookCode":"1005","bookTitle":"Book - 1005","coverImage":"img/book-cover/1005.jpg","price":"500.56","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"6"},
	{"bookCode":"1006","bookTitle":"Book - 1006","coverImage":"img/book-cover/1006.jpg","price":"299.55","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"2"},
	{"bookCode":"1007","bookTitle":"Book - 1007","coverImage":"img/book-cover/1007.jpg","price":"200.45","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"2"},
	{"bookCode":"1008","bookTitle":"Book - 1008","coverImage":"img/book-cover/1008.jpg","price":"675.87","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"8"},
	{"bookCode":"1009","bookTitle":"Book - 1009","coverImage":"img/book-cover/1009.jpg","price":"200.15","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"10"},
	{"bookCode":"1010","bookTitle":"Book - 1010","coverImage":"img/book-cover/1010.jpg","price":"700.50","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ultricies tellus eget vulputate. Phasellus tincidunt ornare tortor tempus eleifend. Pellentesque nec nulla erat. Sed eu ante at ex aliquet tristique vel non odio. ","discountPercent":"10"}];
app.controller("LatestReleasController",function(){
	this.products = books;
});

})();
