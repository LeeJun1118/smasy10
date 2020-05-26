package com.smasy10.apple.security.oauth;


import com.smasy10.apple.util.CookieUtils;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import sun.misc.MessageUtils;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.smasy10.apple.security.oauth.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

@Component
public class OAuth2AuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

   /* private String loginidname;
    private String loginpwdname;
    private String errormsgname;
    private String defaultFailureUrl;*/

    @Autowired
    HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        String targetUrl = CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue)
                .orElse(("/"));

        targetUrl = UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("error", exception.getLocalizedMessage())
                .build().toUriString();

        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);

        getRedirectStrategy().sendRedirect(request, response, targetUrl);
/*



        String username = request.getParameter(loginidname);
        String password = request.getParameter(loginpwdname);
        String errormsg = null;

        if(exception instanceof BadCredentialsException) {
            //errormsg = MessageUtils.getMessage("error.BadCredentials");
            MessageUtils.toStderr("error.BadCredentials");
        } else if(exception instanceof InternalAuthenticationServiceException) {
            //errormsg = MessageUtils.getMessage("error.BadCredentials");
            MessageUtils.toStderr("error.BadCredentials");
        } else if(exception instanceof DisabledException) {
            //errormsg = MessageUtils.getMessage("error.Disaled");
            MessageUtils.toStderr("error.Disaled");
        } else if(exception instanceof CredentialsExpiredException) {
            //errormsg = MessageUtils.getMessage("error.CredentialsExpired");
            MessageUtils.toStderr("error.CredentialsExpired");
        }

        request.setAttribute(loginidname, username);
        request.setAttribute(loginpwdname, password);
        request.setAttribute(errormsgname, errormsg);

        request.getRequestDispatcher(defaultFailureUrl).forward(request, response);*/
    }
}
