(function() {var implementors = {};
implementors["tokio_channel"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_channel/mpsc/struct.Receiver.html\" title=\"struct tokio_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_channel::mpsc::Receiver"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_fs/struct.ReadDir.html\" title=\"struct tokio_fs::ReadDir\">ReadDir</a>",synthetic:false,types:["tokio_fs::read_dir::ReadDir"]},];
implementors["tokio_io"] = [{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::lines::Lines"]},];
implementors["tokio_signal"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_signal/unix/struct.Signal.html\" title=\"struct tokio_signal::unix::Signal\">Signal</a>",synthetic:false,types:["tokio_signal::unix::Signal"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_tcp/struct.Incoming.html\" title=\"struct tokio_tcp::Incoming\">Incoming</a>",synthetic:false,types:["tokio_tcp::incoming::Incoming"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/delay_queue/struct.DelayQueue.html\" title=\"struct tokio_timer::delay_queue::DelayQueue\">DelayQueue</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::delay_queue::DelayQueue"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/throttle/struct.Throttle.html\" title=\"struct tokio_timer::throttle::Throttle\">Throttle</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::throttle::Throttle"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Timeout.html\" title=\"struct tokio_timer::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["tokio_timer::timeout::Timeout"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>",synthetic:false,types:["tokio_timer::interval::Interval"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_udp::frame::UdpFramed"]},];
implementors["tokio_uds"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_uds/struct.Incoming.html\" title=\"struct tokio_uds::Incoming\">Incoming</a>",synthetic:false,types:["tokio_uds::incoming::Incoming"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
