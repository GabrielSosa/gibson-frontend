import { useEffect } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Navigate, Link, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

// hooks
import { useRedux } from '../../hooks/';

// actions
import { resetAuth, loginUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components/form/';

import AuthLayout from './AuthLayout';
import Loader2 from '../../components/Loader2';

type LocationState = {
    from?: Location;
};

type UserData = {
    email: string;
    password: string;
};

/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    <Link to="/auth/forget-password" className="ms-1">
                        <i className="fa fa-lock me-1"></i>
                        {t('¿Olvidaste tu contraseña?')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = () => {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();

    const { user, userLoggedIn, loading, error } = appSelector((state) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Por favor ingrese un correo')).email(t('Por favor ingrese un correo válido')),
            password: yup.string().required(t('Por favor ingrese una contraseña')),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
        dispatch(loginUser(formData['email'], formData['password']));
    };

    const location = useLocation();
    let redirectUrl = '/';

    if (location.state) {
        const { from } = location.state as LocationState;
        redirectUrl = from ? from.pathname : '/';
    }

    return (
        <>
            {userLoggedIn && user && <Navigate to={redirectUrl} replace />}

            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="text-center mb-4">
                    <h4 className="text-uppercase mt-0">{t('Iniciar Sesión')}</h4>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}
                <Loader2 loading={loading}/>

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ email: 'admin@gmail.com', password: 'speakme123' }}
                >
                    <FormInput
                        type="email"
                        name="email"
                        label={t('Correo Electrónico')}
                        placeholder={t('email@gibson.hn')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Contraseña')}
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        containerClass={'mb-3'}
                    ></FormInput>

                    <FormInput
                        type="checkbox"
                        name="checkbox"
                        label={t('Recordarme')}
                        containerClass={'mb-3'}
                        defaultChecked
                    />

                    <div className="text-center d-grid mb-3">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Iniciar Sesión')}
                        </Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default Login;
