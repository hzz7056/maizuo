//参数_t 当前时间戳
//请求轮播图
const HomeBannerApi='/v4/api/billboard/home?';

//请求主页电影列表
const HomeListApi='/v4/api/film/now-playing';

//请求即将上映电影
const HomelistSoonApi='/v4/api/film/coming-soon';

//请求详情页数据
const HomelistDetailsApi='/v4/api/film/';

//电影正在上映电影列表
const MovieslistApi='/v4/api/film/now-playing';

//请求即将上映影院列表
const MoviesSoonlistApi='/v4/api/film/coming-soon';

//请求商城列表
const ShoplistApi='/api/ad/list';

//请求商城商品
const ShopProductApi='/api/recommend/home?page=1&num=20';

//请求影院列表
const CinemalistApi='/v4/api/cinema';

//请求用户信息
const CenterInfoApi='../../static/Center/info.json';

//请求商城商品详情页数据
const ProDetailsApi='/api/item?id=';

//请求详情列表图片
const ProDetailsimgApi='/api/item/desc?id=18';

//请求城市列表
const CitylistDataApi='/v4/api/city';

export default {
	HomeBannerApi,
	HomeListApi,
	HomelistSoonApi,
	HomelistDetailsApi,
	MovieslistApi,
	MoviesSoonlistApi,
	ShoplistApi,
	ShopProductApi,
	CinemalistApi,
	CenterInfoApi,
	ProDetailsApi,
	ProDetailsimgApi,
	CitylistDataApi
}
