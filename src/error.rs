use std::error::{Error as StdError};

quick_error! {
    /// A generic name resolution error
    ///
    /// It's designed to provide basic abstraction over error types and also
    /// provide as much information as possible by carrying original error
    #[derive(Debug)]
    pub enum Error {
        /// Couldn't parse a name before resolution
        ///
        /// It's expected that this error is permanent and is a failure of
        /// validating user input or the name in the configuration is invalid,
        /// but it's possible that some resolver have very specific
        /// requirements for names, so you might want to change resolver too.
        InvalidName(name: String, description: &'static str) {
            description("name that you are trying to resolve is invalid")
            display("name {:?} is invalid: {}", name, description)
        }
        /// Temporary name resolution error
        ///
        /// This means either name server returned this kind of error or
        /// we couldn't connect to a name server itself. It's safe to assume
        /// that you can retry name resolution in a moment
        TemporaryError(err: Box<StdError + Send>) {
            description("temporary name resolution error")
            display("temporary name resolution error: {}", err)
            cause(&**err)
        }
        /// We have sucessfully done name resolution but there is no such name
        NameNotFound {
            description("name not found")
            display("name not found")
        }
    }
}
