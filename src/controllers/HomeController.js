class HomeController {
  async index(req, res) {
    res.json('API WORKING SUCCESFULLY')
  }
}

export default new HomeController()
