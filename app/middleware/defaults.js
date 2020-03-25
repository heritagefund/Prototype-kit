/**
 * Placeholder objects for
 * application data
 */
const middleware = (req, res, next) => {
    const data = req.session.data
    const body = req.body
  
    // Default project data
    data.project = data.project || {}
   
    next()
  }
  
  module.exports = middleware