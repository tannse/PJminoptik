<form ref={form} onSubmit={sendEmail} onChange={(e) => onChange(e)}>
    <div className="field">
        <span className="span">
            <img className="span_icon" src={contact_user} alt="" />
        </span>
        <input
            ref={nameRef}
            type="text"
            name="name"
            className="input"
            id="Name"
            placeholder="Họ tên quý khách (*)"
            required
            onInvalid={(F) =>
                F.target.setCustomValidity("Vui lòng nhập tên của quý khách")
            }
            onInput={(F) => F.target.setCustomValidity("")}
        />
        {/* <label className="label">Họ và tên quý khách</label> */}
    </div>
    <div className="field">
        <span className="span">
            <img className="span_icon" src={contact_phone} alt="" />
        </span>
        <input
            type="tel"
            name="phone"
            className="input"
            id="Phone"
            placeholder="Điện thoại (*)"
            required
            onInvalid={(F) =>
                F.target.setCustomValidity(
                    "Vui lòng nhập số điện thoại của quý khách"
                )
            }
            onInput={(F) => F.target.setCustomValidity("")}
        />
        {/* <label className="label">Điện thoại</label> */}
    </div>
    <div className="field">
        <span className="span">
            <img className="span_icon" src={contact_email} alt="" />
        </span>
        <input
            type="email"
            name="email"
            className="input"
            id="Email"
            placeholder="Email (*)"
            required
            onInvalid={(F) =>
                F.target.setCustomValidity("Vui lòng nhập email của quý khách")
            }
            onInput={(F) => F.target.setCustomValidity("")}
        />
        {/* <label className="label">Email</label> */}
    </div>
    <div className="field">
        <span className="span">
            <img className="span_icon" src={contact_job} alt="" />
        </span>
        <input
            type="text"
            name="job"
            className="input"
            id="job"
            placeholder="Ngành nghề"
            // required
        />
        {/* <label className="label">Ngành nghề</label> */}
    </div>
    <div className="field">
        <span className="span">
            <img className="span_icon" src={contact_message} alt="" />
        </span>
        <textarea
            style={{ paddingTop: 12, height: "90px", resize: "none" }}
            name="message"
            className="input"
            id="message"
            placeholder="Lời nhắn của quý khách"
            // required
        />
        {/* <label className="label">Lời nhắn của quý khách</label> */}
    </div>
    <div className="field_submit">
        <button
            className={`${
                !submitButton ? "form_submit_disable" : "form_submit"
            } `}
            type="submit"
            disabled={!submitButton}
        >
            {confirmLoading && <LoadingOutlined className="confirmLoading" />}
            <span>Đăng Ký Ngay</span>
        </button>
    </div>
</form>;

emailjs.sendForm("service_...", "template_...", form.current, "key").then(
    (result) => {
        message.success("Lời nhắn của quý khách đã được gửi ");
        e.target.reset();
        setConfirmLoading(false);
        nameRef.current.focus();
    },
    (error) => {
        message.error(
            "Đã có lỗi xảy ra. Lời nhắn của quý khách chưa được gửi, vui lòng thử lại"
        );
    }
);
