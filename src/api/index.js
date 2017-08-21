//参数_t 当前时间戳
const HomeBannerApi='/v4/api/billboard/home?__t=1503027358820';

const HomeListApi='/v4/api/film/now-playing?__t=1503039966026&page=1&count=5';

const HomelistSoonApi='/v4/api/film/coming-soon?__t=1503045106363&page=1&count=3';

const HomelistDetailsApi='/v4/api/film/3828?__t=1503056599058';

//电影
const MovieslistApi='/v4/api/film/now-playing?page=1&count=7';

//请求商城列表

const ShoplistApi='/api/ad/list';

export default {
	HomeBannerApi,
	HomeListApi,
	HomelistSoonApi,
	HomelistDetailsApi,
	MovieslistApi,
	ShoplistApi
}
