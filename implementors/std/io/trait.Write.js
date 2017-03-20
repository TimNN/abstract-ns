(function() {var implementors = {};
implementors["bytes"] = ["impl&lt;B:&nbsp;<a class='trait' href='bytes/buf/trait.BufMut.html' title='bytes::buf::BufMut'>BufMut</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='bytes/buf/struct.Writer.html' title='bytes::buf::Writer'>Writer</a>&lt;B&gt;",];
implementors["libc"] = [];
implementors["mio"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a Io","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a TcpStream","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a PipeWriter",];
implementors["tokio_core"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_io/length_delimited/struct.FramedRead.html' title='tokio_io::length_delimited::FramedRead'>FramedRead</a>&lt;T&gt; <span class='where fmt-newline'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_io/split/struct.WriteHalf.html' title='tokio_io::split::WriteHalf'>WriteHalf</a>&lt;T&gt; <span class='where fmt-newline'>where T: <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='mio/net/tcp/struct.TcpStream.html' title='mio::net::tcp::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a <a class='struct' href='mio/net/tcp/struct.TcpStream.html' title='mio::net::tcp::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a Io","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a TcpStream","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a PipeWriter","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='bytes/buf/writer/struct.Writer.html' title='bytes::buf::writer::Writer'>Writer</a>&lt;B&gt; <span class='where fmt-newline'>where B: <a class='trait' href='bytes/buf/buf_mut/trait.BufMut.html' title='bytes::buf::buf_mut::BufMut'>BufMut</a></span>","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_core/io/struct.WriteHalf.html' title='tokio_core::io::WriteHalf'>WriteHalf</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;E:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for &amp;'a <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt; <span class='where fmt-newline'>where &amp;'a E: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];
implementors["tokio_io"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_io/codec/length_delimited/struct.FramedRead.html' title='tokio_io::codec::length_delimited::FramedRead'>FramedRead</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> for <a class='struct' href='tokio_io/io/struct.WriteHalf.html' title='tokio_io::io::WriteHalf'>WriteHalf</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()